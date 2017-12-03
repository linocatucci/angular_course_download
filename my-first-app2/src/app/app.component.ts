import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my Angular app';
  message = 'Angular Rocks.....once you know it :)'
  inputText:string;
}
