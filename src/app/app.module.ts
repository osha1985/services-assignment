import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ActiveUsersComponent} from './active-users/active-users.component';
import {InactiveUsersComponent} from './inactive-users/inactive-users.component';
import {UserService} from './user-service/user.service';
import {CounterService} from './counter-service/counter.service';

@NgModule({
  declarations: [
    AppComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
