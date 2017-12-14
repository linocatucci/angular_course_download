import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

import {AuthService} from '../auth.service';
import {Store} from '@ngrx/store';
import * as fromApp from '../../ngrx-store/app.reducers'
import * as AuthActions from '../../auth/ngrx-store/auth.actions';
import {Router} from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>,
              private router: Router) {
  }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new AuthActions.TrySignIn({username: email, password: password}));
    // this.router.navigate(['recipes']); // gone to the effects file
  }

}
