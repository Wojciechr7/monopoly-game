import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { AppGateway } from "../../app.gateway";
import { GameService } from "./game.service";
import { Socket } from "socket.io";

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
    this.logger.log('Game Has disconnected');
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log('Game Connected');
    client.emit('getGameState', this.gameService.Games[0]);
  }

  @SubscribeMessage('joinToGame')
  joinToGame(client: Socket, { gameIndex, playerName }): void {
    if (this.gameService.joinToGame(gameIndex, client.id, playerName)) {
      client.broadcast.emit('playerJoinedToGame', this.gameService.Games[gameIndex]);
    } else {
      client.broadcast.emit('error', '');
    }
  }

  @SubscribeMessage('createGame')
  createGame(client: Socket, { playerName }): void {
    this.gameService.createNewGame(client.id, playerName);
    this.wss.emit('getGameState', this.gameService.Games[0]);
  }

  @SubscribeMessage('rollDice')
  rollDice(client: Socket, { gameIndex }): void {


    console.log(client.id)
    this.gameService.rollDice();
    //this.wss.emit('getGameState', this.gameService.Games[0]);
  }

}
