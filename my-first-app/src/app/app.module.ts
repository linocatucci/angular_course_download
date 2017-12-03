import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { SlideShowsComponent } from './slide-shows/slide-shows.component';
import { SuccessMessageComponent } from './success-messasge/success-message.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { WarningMessageComponent } from './warning-message/warning-message.component';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SlideShowComponent,
    SlideShowsComponent,
    SuccessMessageComponent,
    ErrorMessageComponent,
    WarningMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
