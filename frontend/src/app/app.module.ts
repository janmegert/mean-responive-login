import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RoutingModule} from './routing.module';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import { LoginService} from './login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
