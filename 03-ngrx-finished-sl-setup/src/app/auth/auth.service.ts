import {Router} from '@angular/router';
import * as firebase from 'firebase';
import {Injectable} from '@angular/core';
import * as fromApp from '../ngrx-store/app.reducers';
import * as AuthActions from '../auth/ngrx-store/auth.actions'
import {Store} from '@ngrx/store';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router,
              private store: Store<fromApp.AppState>) {
  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        user => {
          this.store.dispatch(new AuthActions.SignUp());
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => {
                this.store.dispatch(new AuthActions.SetToken(token))
              }
            );
        }
      )
      .catch(
        error => console.log(error)
      );
    this.router.navigate(['/']);
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.store.dispatch(new AuthActions.SignIn());
          this.router.navigate(['/']);
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => {
                this.store.dispatch(new AuthActions.SetToken(token))
              }
            )
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout() {
    // firebase.auth().signOut();
    // this.store.dispatch(new AuthActions.LogOut())
  }

  // door ngrx module uit gezet
  // getToken() {
  //   firebase.auth().currentUser.getToken()
  //     .then(
  //       (token: string) => this.token = token
  //     );
  //   return this.token;
  // }
  //
  // isAuthenticated() {
  //   return this.token != null;
  // }
}
