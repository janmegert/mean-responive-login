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

  /** 
   * ngIf-flag is used to control DOM elements
   * alertFlag control whether the alertmessage should be displayed
   * buttonEffectsFlag control whether the button effects shoould be displayed
   */
  alertFlag = false;
  buttonEffectsFlag = false;

  // disableButton is used to control button 'disabled' property
  disableButton = true;

  /**
   * this helper function displays message when user did not eneter 
   * the credentials completely
   */
  enterCredential(){
    this.alertFlag = true;
    this.alertMessage = 'enter credentials';
  }

  /**
   * this helper function  displays message when user sign in successfully
   */
  signinSuccess(){
    this.alertFlag = true;
    this.alertMessage = 'signed in successfully';
  }

  
  /**
   * this helper function displays message when user used the wrong password
   */
  signinFailure(){
    this.alertFlag = true;
    this.alertMessage = 'wrong password';
  }

  /**
   * this helper function displays message when user used the unregistered username
   */
  requireSignup(){
    this.alertFlag = true;
    this.alertMessage = 'unregistered username, please sign up';
  }

   /**
    * this helper function displays loading button effects 
    */
  loadingEx(){
    this.buttonEffectsFlag = true;
  }

  /**
   * this function hanles the JSON response from databse
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
   * Using data binding, when user click 'sign in' button, the credentials will be passed 
   * into function verifyCredentials. Then function verifyCredentials will call loginService and 
   * send a REST request. When the REST requesting succeeds, function checkDbResponse will be 
   * called to handle the Http response.
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
