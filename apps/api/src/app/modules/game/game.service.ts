import { Injectable } from '@nestjs/common';
import { GameStateModel } from "../../../../../../libs/api-interfaces/src/lib/models/game-state.model";
import { getRandomNumber } from "../../../../../../libs/base/src/lib/helpers/get-random-number";
import { PlayerModel } from "../../../../../../libs/api-interfaces/src/lib/models/player.model";
import { v4 as uuid } from 'uuid';

@Injectable()
export class GameService {

  private games: Map<string, GameStateModel> = new Map<string, GameStateModel>().set(
    'tesat', {
      gameStarted: false,
      availablePropertyCards: undefined,
      chanceCards: [],
      communityChestCards: [],
      currentPlayer: null,
      leftDice: 1,
      players: [],
      rightDice: 3,
      diceRolled: false
    }
  )

  get Games(): GameStateModel[] {
    return [...this.games.entries()].map(([id, game]) => ({ ...game, id }));
  }

  addTestAccounts(clientId) {
    if (this.games.get('tesat').players.length === 0) {
      this.games.get('tesat').players.push({
        id: clientId,
        isConnected: true,
        isGameMaster: true,
        name: "game master",
        position: 0
      });
    }

    if (this.games.get('tesat').players.length === 1) {
      this.games.get('tesat').players.push({
        id: clientId,
        isConnected: true,
        isGameMaster: false,
        name: "plejer",
        position: 0
      });
    }
  }

  getGameByKey(key: string): GameStateModel {
    return this.games.get(key);
  }

  foundPlayerInGame(gameId: string, playerId: string): boolean {
    return this.games.get(gameId).players.some((player: PlayerModel) => player.id === playerId);
  }

  createNewGame(playerId: string, playerName: string): { id: string, game: GameStateModel } {
    const newGame: GameStateModel = {
      gameStarted: false,
      availablePropertyCards: undefined,
      chanceCards: [],
      communityChestCards: [],
      currentPlayer: playerId,
      leftDice: 1,
      players: [{ id: playerId, isConnected: true, name: playerName, position: 0, isGameMaster: true }],
      rightDice: 3,
      diceRolled: false
    }

    const id = uuid();

    this.games.set(id, newGame);

    return { id, game: newGame };
  }

  rollDice(gameId): { leftDice: number, rightDice: number } {
    const leftDice = getRandomNumber(1, 6);
    const rightDice = getRandomNumber(1, 6);

    this.games.get(gameId).leftDice = leftDice;
    this.games.get(gameId).rightDice = rightDice;
    this.games.get(gameId).diceRolled = true;

    return { leftDice, rightDice };
  }

  joinToGame(gameId: string, playerId: string, playerName: string) {
    const newPlayer: PlayerModel = {
      id: playerId, isConnected: true, name: playerName, position: 0, isGameMaster: false
    };

    this.games.get(gameId).players.push(newPlayer);
  }

  removePlayerFromGame(gameId: string, playerId: string) {
    this.games.get(gameId).players = this.games.get(gameId).players.filter((player: PlayerModel) => player.id !== playerId);
  }

  removePlayer(gameId: string, playerId: string) {
    this.games.get(gameId).players = this.games.get(gameId).players.filter((player: PlayerModel) => player.id !== playerId);

    this.handleDisconnectedPlayer(playerId);
    this.gameMasterLeaveAction(gameId, playerId);
  }

  handleDisconnectedPlayer(playerId: string) {
    this.games.forEach((game: GameStateModel, key: string) => {
      const foundPlayer = game.players.find((player: PlayerModel) => player.id === playerId);

      if (foundPlayer) {
        foundPlayer.isConnected = false;
      }

      if (!game.players.some((player: PlayerModel) => player.isConnected)) {
        this.games.delete(key);
      }
    });
  }

  findGameIdByPlayerId(playerId: string): string {
    let gameId: string;

    this.games.forEach((game: GameStateModel, id: string) => {
      if (game.players.some((player: PlayerModel) => player.id === playerId)) {
        gameId = id;
      }
    });

    return gameId;
  }

  findGameIdByPlayerName(playerName: string): string {
    let gameId: string;

    this.games.forEach((game: GameStateModel, id: string) => {
      if (game.players.some((player: PlayerModel) => player.name === playerName && !player.isConnected)) {
        gameId = id;
      }
    });

    return gameId;
  }

  connectPlayer(gameId: string, newPlayerId: string, playerName: string) {
    this.games.get(gameId).players = this.games.get(gameId).players.map((player: PlayerModel) => {
      if (player.name === playerName) {
        return { ...player, isConnected: true, id: newPlayerId }
      }

      return player;
    });
  }

  foundDuplicatedPlayerName(gameId: string, playerName: string): boolean {
    return this.games.get(gameId).players.some((player: PlayerModel) => player.name === playerName);
  }

  isPlayerDisconnected(gameId: string, playerName: string): boolean {
    return !this.games.get(gameId).players.find((player: PlayerModel) => player.name === playerName).isConnected;
  }

  gameExist(gameId: string): boolean {
    return !!this.games.get(gameId);
  }

  canStartGame(gameId: string, playerId: string): boolean {
    return this.games.get(gameId)?.players.find((player: PlayerModel) => player.id === playerId)?.isGameMaster;
  }

  startGame(gameId: string) {
    this.games.get(gameId).gameStarted = true;
    this.games.get(gameId).currentPlayer = this.games.get(gameId).players[0].id;
  }

  validateMinimalNumberOfPlayers(gameId: string): boolean {
    return this.games.get(gameId).players.length > 1 && this.games.get(gameId).players.length < 5;
  }

  isGameStarted(gameId: string): boolean {
    return this.games.get(gameId).gameStarted;
  }

  private gameMasterLeaveAction(gameId: string, playerId: string) {
    if (this.canStartGame(gameId, playerId)) {
      this.games.delete(gameId);
    }
  }

}
