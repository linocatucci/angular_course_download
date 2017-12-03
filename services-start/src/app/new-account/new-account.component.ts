import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoggingService} from "../logging.service";
import {UserService} from "../user.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  // is niet meer nodig door de UserService te gebruiken.
  // @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  constructor(private loggingService: LoggingService, private userService: UserService) {

  }

  ngOnInit() {
    this.userService.statusUpdated.subscribe((status: string) => {
      alert('New status ' + status);
    })
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // is niet meer nodig door de UserService te gebruiken.
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.userService.addAccount(accountName, accountStatus);
    // in the end the service went to the userService
    // this.loggingService.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
