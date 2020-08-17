import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { AppGateway } from "../../app.gateway";
import { GameService } from "./game.service";
import { Socket } from "socket.io";
import { GameStateModel } from "../../../../../../libs/api-interfaces/src/lib/models/game-state.model";
import {
  GameServerEmitActions,
  GameServerListenActions
} from "../../../../../../libs/base/src/lib/helpers/socket-game-actions";

@WebSocketGateway(4001)
export class GameGateway extends AppGateway {

  constructor(
    private gameService: GameService
  ) {
    super();
  }

  afterInit(server: Socket) {
    this.logger.log('Game Initialized');
  }

  handleDisconnect(client: Socket) {
    this.gameService.handleDisconnectedPlayer(client.id);

    this.wss.emit(GameServerEmitActions.GetGameList, this.gameService.Games);
  }

  handleConnection(client: Socket, ...args: any[]) {
/*    const game = this.gameService.getGameByKey('tesat');
    if (game.players.length === 2) {
      game.players = [];
    }

    this.gameService.addTestAccounts(client.id);

    client.join('tesat');

    if (game.players.length === 2) {
      this.gameService.startGame('tesat');
    }

    client.to('tesat').emit(GameServerEmitActions.GetGameState, game);
    client.emit(GameServerEmitActions.GetGameState, game);*/


    //TODO probably issue, maybe caused by lazy loaded game module
    setTimeout(() => {
      client.emit(GameServerEmitActions.GetGameList, this.gameService.Games);
      client.emit(GameServerEmitActions.GetClientId, client.id);
    }, 1000);
  }

  @SubscribeMessage(GameServerListenActions.JoinToGame)
  joinToGame(client: Socket, { gameId, playerName }) {
    if (this.gameService.foundDuplicatedPlayerName(gameId, playerName)) {
      if (this.gameService.isPlayerDisconnected(gameId, playerName)) {
        this.gameService.connectPlayer(gameId, client.id, playerName);

        const foundGame = this.gameService.getGameByKey(gameId);

        client.join(gameId);
        client.to(gameId).emit(GameServerEmitActions.GetGameState, foundGame);
        client.emit(GameServerEmitActions.GetGameState, foundGame);

        return this.wss.emit(GameServerEmitActions.GetGameList, this.gameService.Games);
      }

      return client.emit(GameServerEmitActions.Error, 'Duplicated player name');
    }

    if (!this.gameService.gameExist(gameId)) {
      return client.emit(GameServerEmitActions.Error, 'Game not exist');
    }

    if (this.gameService.findGameIdByPlayerId(client.id)) {
      return client.emit(GameServerEmitActions.Error, 'You are actually playing a game');
    }

    const game = this.gameService.getGameByKey(gameId);

    if (game.players.length === 4) {
      return client.emit(GameServerEmitActions.Error, 'Game lobby is full');
    }

    this.gameService.joinToGame(gameId, client.id, playerName);

    client.join(gameId);
    client.to(gameId).emit(GameServerEmitActions.GetGameState, game);
    client.emit(GameServerEmitActions.GetGameState, game);

    this.wss.emit(GameServerEmitActions.GetGameList, this.gameService.Games);
  }

  @SubscribeMessage(GameServerListenActions.BackToGame)
  backToGame(client: Socket, { playerName }) {
    const gameId = this.gameService.findGameIdByPlayerName(playerName);

    if (!gameId) {
      return client.emit(GameServerEmitActions.Error, 'Game not found');
    }

    this.gameService.connectPlayer(gameId, client.id, playerName);

    const game: GameStateModel = this.gameService.getGameByKey(gameId);

    client.join(gameId);
    client.to(gameId).emit(GameServerEmitActions.GetGameState, game);
    client.emit(GameServerEmitActions.GetGameState, game);

    this.wss.emit(GameServerEmitActions.GetGameList, this.gameService.Games);
  }

  @SubscribeMessage(GameServerListenActions.LeaveGame)
  leaveGame(client: Socket) {
    const gameId = this.gameService.findGameIdByPlayerId(client.id);

    if (!gameId) {
      return client.emit(GameServerEmitActions.Error, 'Game not found');
    }

    this.gameService.removePlayer(gameId, client.id);

    const game = this.gameService.getGameByKey(gameId);

    if (game) {
      client.leave(gameId);
      client.to(gameId).emit(GameServerEmitActions.GetGameState, game);
    }

    this.wss.emit(GameServerEmitActions.GetGameList, this.gameService.Games);
  }

  @SubscribeMessage(GameServerListenActions.CreateGame)
  createGame(client: Socket, { playerName }) {
    if (this.gameService.findGameIdByPlayerId(client.id)) {
      return client.emit(GameServerEmitActions.Error, 'Active game found');
    }

    const { id, game } = this.gameService.createNewGame(client.id, playerName);

    client.join(id);
    client.emit(GameServerEmitActions.GetGameState, game);

    this.wss.emit(GameServerEmitActions.GetGameList, this.gameService.Games);
  }

  @SubscribeMessage(GameServerListenActions.RollDice)
  rollDice(client: Socket) {

    const gameId = this.gameService.findGameIdByPlayerId(client.id);
    const game = this.gameService.getGameByKey(gameId);

    if (!gameId) {
      return client.emit(GameServerEmitActions.Error, 'Game not found');
    }

    if (!this.gameService.isGameStarted(gameId)) {
      return client.emit(GameServerEmitActions.Error, 'Game not started');
    }

    if (game.currentPlayer !== client.id) {
      return client.emit(GameServerEmitActions.Error, 'Its not your turn');
    }

    if (game.diceRolled) {
      return client.emit(GameServerEmitActions.Error, 'Dice already rolled');
    }

    const { leftDice, rightDice } = this.gameService.rollDice(gameId);

    client.to(gameId).emit(GameServerEmitActions.GetGameState, game);
    client.to(gameId).emit(GameServerEmitActions.DiceRolled, { leftDice, rightDice });
    client.emit(GameServerEmitActions.GetGameState, game);
    client.emit(GameServerEmitActions.DiceRolled, { leftDice, rightDice });
  }

  @SubscribeMessage(GameServerListenActions.StartGame)
  startGame(client: Socket) {
    const gameId = this.gameService.findGameIdByPlayerId(client.id);

    if (!gameId) {
      return client.emit(GameServerEmitActions.Error, 'Game not found');
    }

    if (!this.gameService.canStartGame(gameId, client.id)) {
      return client.emit(GameServerEmitActions.Error, 'Only game master can start game');
    }

    if (!this.gameService.validateMinimalNumberOfPlayers(gameId)) {
      return client.emit(GameServerEmitActions.Error, 'Need at least 2 players to start game');
    }

    if (this.gameService.isGameStarted(gameId)) {
      return client.emit(GameServerEmitActions.Error, 'Game already started');
    }

    this.gameService.startGame(gameId);

    const game: GameStateModel = this.gameService.getGameByKey(gameId);

    client.to(gameId).emit(GameServerEmitActions.GetGameState, game);
    client.emit(GameServerEmitActions.GetGameState, game);
    this.wss.emit(GameServerEmitActions.GetGameList, this.gameService.Games);
  }

  @SubscribeMessage(GameServerListenActions.RemovePlayer)
  removePlayer(client: Socket, { playerId }) {
    if (playerId === client.id) {
      return client.emit(GameServerEmitActions.Error, 'Can not remove yourself');
    }

    const gameId = this.gameService.findGameIdByPlayerId(client.id);

    if (!gameId) {
      return client.emit(GameServerEmitActions.Error, 'Game not found');
    }

    if (!this.gameService.foundPlayerInGame(gameId, client.id)) {
      return client.emit(GameServerEmitActions.Error, 'Can not remove players from other games');
    }

    if (!this.gameService.canStartGame(gameId, client.id)) {
      return client.emit(GameServerEmitActions.Error, 'Only game master can remove players');
    }

    this.gameService.removePlayerFromGame(gameId, playerId);

    const game = this.gameService.getGameByKey(gameId);

    if (game) {
      client.leave(gameId);
      client.to(gameId).emit(GameServerEmitActions.GetGameState, game);
    }

    this.wss.emit(GameServerEmitActions.GetGameList, this.gameService.Games);
  }

}
