import { Component, OnInit } from '@angular/core';
import { WebSocketService } from "../../../core/websocket/websocket.service";


export interface Device {
  device: {
    id: string,
    name: string
  },
  timestamp: number
}

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {

  devices: Device[] = [];

  constructor(private ws: WebSocketService) { }

  ngOnInit() {
    console.log("I AM YOUR CREATOR");
    this.ws.subscribe(next => {
      let data = next.data;
      console.log(data)
      this.devices.push(JSON.parse(data));
    });
  }


  sendTestMsg() {
    this.ws.sendJSON({
      device: {
        id: "1", name: "numero uno"
      },
      timestamp: Date.now()
    });
  }

  ngOnDestroy(): void {
    console.log("destroyed bitch")
  }

}
