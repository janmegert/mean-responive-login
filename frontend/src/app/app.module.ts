import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RoutingModule} from './routing.module';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import { LoginService} from './login/login.service';
import { SignupService} from './signup/signup.service';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, LoginService, SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
