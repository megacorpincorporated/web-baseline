import { Injectable } from '@angular/core';
import {webSocket, WebSocketSubject} from "rxjs/webSocket";

const URL = "ws://echo.websocket.org/";

export interface Device {
  device: {
    id: string,
    name: string
  },
  timestamp: number

}

@Injectable({
  providedIn: 'root'
})

export class WebsocketService {
  socketSubject: WebSocketSubject<Device>;
  constructor() {
   this.socketSubject = webSocket(URL);
  }

  sendMessage() {
    this.socketSubject.next(
      {device: {
        id: "1", name: "theDevice"},
        timestamp: Date.now()
      });
    this.socketSubject.next(
      {device: {
        id: "2", name: "numero dos"},
        timestamp: Date.now()
      });
  }

}
