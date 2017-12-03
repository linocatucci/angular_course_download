import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // styleUrls: ['./server.component.css']
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string;

  constructor() {
  }

  ngOnInit() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    console.log(this.serverStatus);
  }

  getColor() {
    return this.serverStatus === 'online' ? 'limegreen' : 'orange';
  }

  getServerStatus() {
    return this.serverStatus;
  }
}
