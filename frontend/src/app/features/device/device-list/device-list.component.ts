import {Component, OnDestroy, OnInit} from '@angular/core';
import {Device, WebsocketService} from "../../../core/websocket/websocket.service";

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit, OnDestroy {

  devices: Device[] = [];

  constructor(private ws: WebsocketService) { }

  ngOnInit() {
    console.log("I AM YOUR CREATOR");
    this.ws.socketSubject.subscribe(next => {
    console.log(next);
    this.devices.push(next);
    });
  }


  sendTestMsg(){
    this.ws.sendMessage();
  }

  ngOnDestroy(): void {
    console.log("destroyed bitch")
  }

}
