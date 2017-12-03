import {Component, OnInit} from '@angular/core';
import {LoggingService} from "./logging.service";
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {

  // we loopen in de template door accounts, en die is niet meer in de app.component template maar wel in de
  // userservice dus daar naar toe linken
  accounts: { name: string, status: string }[] = [];

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    // we loopen in de template door accounts, en die is niet meer in de app.component template maar wel in de
    // userservice dus daar naar toe linken
    this.accounts = this.userService.accounts
  }


  // NIET MEER NODIG, IS NAAR DE USERSERVICE GEGAAN
  // onAccountAdded(newAccount: { name: string, status: string }) {
  //   this.accounts.push(newAccount);
  // }
  //
  // onStatusChanged(updateInfo: { id: number, newStatus: string }) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }
}
