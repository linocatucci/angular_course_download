import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'Server was NOT created!';
  serverName = '';
  serverCreated = false;
  servers = ['Testserver1', 'Testserver 2'];

  constructor() {
    // () =>{} is dus : (arguments go here) => {function body goes here} IS HET ZELFDE ALS function() {}
    // is het zelfde als:
    // setTimeout(function() { this.allowNewServer = true; }, 3000);
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onServerCreate() {
    this.serverCreationStatus = 'Server WAS created with the name: ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    // casting of the type to tell ts that the type of the html element of this event is a html element
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log((<HTMLInputElement>event.target).value);
  }
}
