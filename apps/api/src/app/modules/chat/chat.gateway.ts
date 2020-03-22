import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { OnGatewayDisconnect } from '@nestjs/websockets/interfaces/hooks/on-gateway-disconnect.interface';
import { OnGatewayConnection } from '@nestjs/websockets/interfaces/hooks/on-gateway-connection.interface';

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  server;

  async handleConnection() {

  }

  async handleDisconnect(client: any) {
  }

  @SubscribeMessage('chat')
  async onMessage(client, message) {
    client.broadcast.emit('chat', message);
  }
}
