import { Component, OnInit } from '@angular/core';
import { LoginService} from './login.service';
import { Router} from '@angular/router';
@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private loginService: LoginService, private router: Router) { 
  }

  ngOnInit() {
  }

  // alertMessage is used to store the message to be displayed
  alertMessage: String;

  /*
   * ngIf-flag is used to control DOM elements
   * alertFlag control whether the alertmessage should be displayed
   * buttonEffectsFlag control whether the button effects shoould be displayed
   */
  alertFlag = false;
  buttonEffectsFlag = false;

  // disableButton is used to control button 'disabled' property
  disableButton = true;

  /* 
   * helper function that displays message when user did not eneter 
   * the credentials completely
   */
  enterCredential(){
    this.alertFlag = true;
    this.alertMessage = 'enter credentials';
  }

  // helper function that displays message when user sign in successfully
  signinSuccess(){
    this.alertFlag = true;
    this.alertMessage = 'signed in successfully';
  }

  // helper function that displays message when user used the wrong password
  signinFailure(){
    this.alertFlag = true;
    this.alertMessage = 'wrong password';
  }

  // helper function that displays message when user used the unregistered username
  requireSignup(){
    this.alertFlag = true;
    this.alertMessage = 'unregistered username, please sign up';
  }

   // helper function that displays loading button effects 
  loadingEx(){
    this.buttonEffectsFlag = true;
  }

  /* 
   * data base will return a JSON stating if signin is successful and whether
   * new account needs to be regiestered.
   * A helper function is  made to check the JSON response from database
  */ 

  /**
   * 
   * @param response 
   */
  checkDbResponse(response: any){
    if(response.isValid){
      this.signinSuccess();
      return;
    }
    if(response.signupRequired){
      this.requireSignup();
      return;
    }
    if(!response.isValid){
      this.signinFailure();
      return;
    }
  }

  redirectToSignup(){
    this.router.navigate(['/signup']);
    return;
  }

  /**
   * 
   * @param username 
   * @param password 
   */
  verifyCredentials(username: String , password: String){
    if(username.length == 0 || password.length ==0){
      console.log('enter credentials');  
      this.enterCredential();
      return;
    }
    this.buttonEffectsFlag = true;
    this.loginService.verifyCredentials({"username": username, "password": password})
                      .subscribe(response => this.checkDbResponse(response),
                                  error => { this.buttonEffectsFlag = false },
                                  () => this.buttonEffectsFlag = false );
  }
}
