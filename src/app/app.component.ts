import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { io } from 'socket.io-client';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'web-socket-app';
  socket: any;
  dataToSend: string = '';
  logs: string[] = [];

  constructor() {
    this.socket = io('http://disturbed-abbey-pttm-88f96613.koyeb.app');
  }

  sendData() {
    if (this.dataToSend) {
      this.socket.emit('send_data', this.dataToSend);
      console.log('Data sent:', this.dataToSend);
      this.logs.push(`Sent: ${this.dataToSend}`);
      this.dataToSend = '';
    }
  }
}
