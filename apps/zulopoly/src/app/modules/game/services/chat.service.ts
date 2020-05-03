import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Message } from "@zulopoly/api-interfaces";
import { SocketChat } from "../../../app.module";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: SocketChat) {
  }

  addMessage(message: Message): void {
    this.socket.emit('messageToServer', message);
  }

  getMessages(): Observable<Message[]> {
    return this.socket.fromEvent<Message[]>('messageToClient');
  }

}
