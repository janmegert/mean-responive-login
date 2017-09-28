import { Component, OnInit } from '@angular/core';
import { LoginService} from './login.service';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private loginService: LoginService) { 
  }

  ngOnInit() {
  }

  alertMessage: String;
  alertFlag = false;

  enterCredential(){
    this.alertFlag = true;
    this.alertMessage = 'enter credentials';
  }

  signinSuccess(){
    // add UI when user sign in successfully 
    this.alertFlag = true;
    this.alertMessage = 'sign in success';
  }

  signinFailed(){
    // add UI that shows password is wrong
    this.alertFlag = true;
    this.alertMessage = 'wrong user credential';
  }

  requireSignup(){
    // add UI that shows signup is required
    this.alertFlag = true;
    this.alertMessage = 'signup required';
  }

  // helper
  checkDbResponse(response: any){
    // add functions that process the response
    if(response.isValid){
      this.signinSuccess();
      return;
    }
    if(response.signupRequired){
      this.requireSignup();
      return;
    }
    if(!response.isValid){
      this.signinFailed();
      return;
    }
  }

  verifyCredentials(username: String , password: String){

    if(username.length == 0 || password.length ==0){
      console.log('enter credentials');  
      // add UI that shows credential needs to be entered
      this.enterCredential();
      return;
    }
    this.loginService.verifyCredentials({"username": username, "password": password})
                      .subscribe(response => this.checkDbResponse(response),
                                  error => {},
                                  ()=>{} );
  }
}
