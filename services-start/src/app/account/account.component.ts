import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LoggingService} from "../logging.service";
import {UserService} from "../user.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;
  // is niet meer nodig
  // @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();

  constructor(private loggingService: LoggingService, private userService: UserService) {

  }

  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    this.userService.updateStatus(this.id, status);
    // in the end the service went to the userService
    // this.loggingService.logStatusChange(status);
    // console.log('A server status changed, new status: ' + status);

    // EMITTER
    this.userService.statusUpdated.emit(status);
  }
}
