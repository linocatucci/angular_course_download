import {Component, OnInit} from '@angular/core';
// import { HttpEvent, HttpEventType } from '@angular/common/http';

import {DataStorageService} from '../../shared/data-storage.service';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromApp from '../../ngrx-store/app.reducers';
import * as fromAuth from '../../auth/ngrx-store/auth.reducers'
import {Observable} from 'rxjs/Observable';
import * as AuthActions from '../../auth/ngrx-store/auth.actions';
import * as firebase from 'firebase';
import * as RecipeActions from '../../recipes/store/recipe.actions'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  authState: Observable<fromAuth.State>;

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService,
              private router: Router,
              private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
  this.authState = this.store.select('auth');
  }

  onSaveData() {
    // this.dataStorageService.storeRecipes()
    //   .subscribe(
    //     (response) => {
    //       console.log(response);
    //     }
    //   );
    this.store.dispatch((new RecipeActions.StoreRecipes()));
  }

  onFetchData() {
    this.store.dispatch(new RecipeActions.FetchRecipes());
  }

  onLogout() {
    // this.authService.logout();
    firebase.auth().signOut();
    this.store.dispatch(new AuthActions.LogOut());
    // this.router.navigate(['/shopping']);
  }
}
