import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  // @Input() users: string[];
  users: string[];

  // @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    //to link to the correct array!
    this.users = this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
    // this.userSetToInactive.emit(id);
    this.userService.setToInactive(id);
  }

}
