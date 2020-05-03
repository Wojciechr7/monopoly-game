import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { Message } from "@zulopoly/api-interfaces";
import { AppGateway } from "../../app.gateway";

@WebSocketGateway()
export class ChatGateway extends AppGateway {

  constructor(
    private chatService: ChatService
  ) {
    super();
  }

  afterInit(server: any) {
    this.logger.log('Initialized');
  }

  handleDisconnect(client: any) {
    this.logger.log('Has disconnected');
  }

  handleConnection(client: any, ...args: any[]) {
    this.logger.log('Connected');
    client.emit('messageToClient', this.chatService.getMessages());
  }

  @SubscribeMessage('messageToServer')
  handleMessage(client: any, payload: Message): void {
    this.logger.log(payload);
    this.chatService.addMessage(payload);
    this.wss.emit('messageToClient', this.chatService.getMessages());
  }

}
