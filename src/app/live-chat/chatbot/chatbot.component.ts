import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  messages: string[] = [];
  userMessage: string = '';

  sendMessage(): void {
    this.messages.push(this.userMessage);
    this.userMessage = '';
    // Aquí iría la lógica para conectar con el chatbot
  }
}
