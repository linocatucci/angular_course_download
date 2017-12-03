import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthGuardService} from "../auth-guard.service";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
  }

  onLoadServer() {
    // for example do some complex stuff here and then navigate to the servers page
    this.router.navigate(['/servers']);
  }

  onLoadServer_1(id: number) {
    // for example do some complex stuff here and then navigate to the servers page
    // http://localhost:4200/servers/1/edit?allowEdit=1#loading
    // test
    // this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
    // this will load TestServer with id : 2 (from the input on the click html)
    this.router.navigate(['/servers', id], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
}
