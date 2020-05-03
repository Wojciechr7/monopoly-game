import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Message } from "@zulopoly/api-interfaces";

@Component({
  selector: 'zulopoly-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  message: string;

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit(): void {

    /*    this.chatService.receiveMessage().subscribe((m) => {
          console.log(m);
        })*/

    this.chatService.getMessages().subscribe(m => {
      console.log(m)
    })
  }

  addChat() {
    const message: Message = {
      creationDate: 'sdg',
      message: this.message,
      user: 'sdafsdg',
      color: 'sdgs'
    };

    this.chatService.addMessage(message);
    /*    this.chatService.addChat(this.message);
        this.message = '';*/
  }

}
