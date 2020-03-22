import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private socket: Socket
  ) { }
  sendMessage (message: string) {
    this.socket.emit('chat', message)
  }

  receiveMessage() {
    return this.socket.fromEvent('chat')
  }

  addChat(message) {

  }
}
