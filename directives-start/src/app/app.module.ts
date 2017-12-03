import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {BasicHighlightDirective} from "./basic-highlight/basic-highlight.directive";
import {h1HighlightDirective} from "./basic-highlight/h1HighLight.directive";
import {BetterHighlightDirective} from './basic-highlight/better-highlight/better-highlight.directive';
import {UnlessDirective} from './unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    h1HighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
