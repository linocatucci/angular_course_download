import { Component, OnInit } from '@angular/core';
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
      // apiKey: "AIzaSyBrkKleAX_8jHpPmTchVBmDD7Hkj8TT1VE",
      // authDomain: "ng-recipe-book-3adbb.firebaseapp.com"
      apiKey: "AIzaSyA9Cx-zGK8_6ACMv_cz4KC3wzHGEzDnssQ",
      authDomain: "ng-recipe-book-5333d.firebaseapp.com"

    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
