import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .aboveFive {
    color: #fff;
  }
`]
})
export class AppComponent {
  title = 'Angular V4, the future!';
  name = '';
  username = '';
  enableButton = false;
  isActive: Boolean = true;
  counter: number = 0;
  buttonClicksArr = [];

  constructor() {
    // () =>{} is dus : (arguments go here) => {function body goes here} IS HET ZELFDE ALS function() {}
    // is het zelfde als:
    // setTimeout(function() { this.allowNewServer = true; }, 3000);
    // setTimeout(() => {
    //   this.allowNewServer = true;
    // }, 2000);

    // Log all button clicks in an array and output that array below the
    // secret paragraph (maybe log a timestamp or simply an incrementing number)

    if (this.username) {
      this.enableButton = true;
    }
  }

  toggle() {
    this.isActive = !this.isActive;
    this.counter += 1;
    this.buttonClicksArr.push(this.counter);
  }

  resetUsernameValue() {
    this.username = '';
    this.enableButton = false;
  }

  getColor() {
    return this.counter > 5 ? 'blue' : 'transparent';
  }
  getCount() {
    return this.counter > 5 ? true : false;
  }
}



