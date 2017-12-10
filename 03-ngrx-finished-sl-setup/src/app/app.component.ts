import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA9Cx-zGK8_6ACMv_cz4KC3wzHGEzDnssQ',
      authDomain: 'ng-recipe-book-5333d.firebaseapp.com'
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}

/*
    authDomain: "ng-recipe-book-5333d.firebaseapp.com",
    databaseURL: "https://ng-recipe-book-5333d.firebaseio.com",
 */

/*
mijn api key: AIzaSyA9Cx-zGK8_6ACMv_cz4KC3wzHGEzDnssQ
van google gekregen met 403: AIzaSyBrkKleAX_8jHpPmTchVBmDD7Hkj8TT1VE

 */
