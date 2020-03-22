import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

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

    this.chatService.receiveMessage().subscribe((m) => {
      console.log(m);
    })
  }

  addChat() {
    this.chatService.addChat(this.message);
    this.message = '';
  }

}
