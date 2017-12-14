import {Actions, Effect} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import * as AuthActions from './auth.actions'
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import {fromPromise} from 'rxjs/observable/fromPromise';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Injectable()
export class AuthEffects {
  @Effect()
  authSignup = this.actions$
    .ofType(AuthActions.TRY_SIGNUP)
    .map((action: AuthActions.TrySignUp) => {
      return action.payload;
    })
    .switchMap((authData: { username: string, password: string }) => {
      return fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
    })
    .switchMap(() => {
      return fromPromise(firebase.auth().currentUser.getIdToken());
    })
    .mergeMap((token: string) => {
      this.router.navigate(['shopping-list']);
      return [
        {
          type: AuthActions.SIGNUP
        },
        {
          type: AuthActions.SET_TOKEN,
          payload: token
        }
      ]
    });

  @Effect()
  authSignin = this.actions$
    .ofType(AuthActions.TRY_SIGNIN)
    .map((action: AuthActions.TrySignIn) => {
      return action.payload;
    })
    .switchMap((authData: { username: string, password: string }) => {
      return fromPromise(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
    })
    .switchMap(() => {
      return fromPromise(firebase.auth().currentUser.getIdToken());
    })
    .mergeMap((token: string) => {
      this.router.navigate(['shopping-list']);
      return [
        {
          type: AuthActions.SIGNIN,
        },
        {
          type: AuthActions.SET_TOKEN,
          payload: token
        }
      ]
    });

  constructor(private actions$: Actions,
              private router: Router) {

  }
}
