import { Logger } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'http';

export abstract class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  wss: Server;

  protected logger = new Logger('AppGateway');

  abstract afterInit(server: any);

  abstract handleDisconnect(client: any);

  abstract handleConnection(client: any, ...args: any[]);

}
