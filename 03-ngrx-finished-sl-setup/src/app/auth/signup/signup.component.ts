import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

import {Store} from '@ngrx/store';
import * as fromApp from '../../ngrx-store/app.reducers';
import * as AuthActions from '../../auth/ngrx-store/auth.actions';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>,
              private router: Router) {
  }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new AuthActions.TrySignUp({username: email, password: password}));
    // this.router.navigate(['recipes']); // gone to the effects file
  }

}
