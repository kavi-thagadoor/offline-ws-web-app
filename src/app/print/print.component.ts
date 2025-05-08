import { Component } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent {
  socket!: Socket;
  connectionStatus = 'Connecting...';
  responseMessage = '';

  ngOnInit(): void {
    this.socket = io('ws://192.168.1.102:8080');

    this.socket.on('connect', () => {
      this.connectionStatus = '✅ Connected to WebSocket server';
    });

    this.socket.on('connect_error', (error) => {
      this.connectionStatus = '❌ Connection failed: ' + error.message;
    });

    this.socket.on('disconnect', () => {
      this.connectionStatus = '⚠️ Disconnected from WebSocket server';
    });

    this.socket.on('print-response', (data) => {
      this.responseMessage = '📨 Print response: ' + JSON.stringify(data);
    });

    this.socket.on('message', (data) => {
      this.responseMessage = '📨 Message: ' + JSON.stringify(data);
    });
  }

  sendPrintData(): void {
    const printData = {
      type: 'print',
      content: 'base64StringHere'
    };
    this.socket.emit('print', printData);
    this.responseMessage = '🖨️ Sent print request.';
  }
}
