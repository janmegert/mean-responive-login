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

  alertMessage: String;
  alertFlag = false;
  buttonEffectsFlag = false;
  disableButton = true;

  enterCredential(){
    this.alertFlag = true;
    this.alertMessage = 'enter credentials';
  }

  signinSuccess(){
    // add UI when user sign in successfully 
    this.alertFlag = true;
    this.alertMessage = 'sign in success';
  }

  signinFailure(){
    // add UI that shows password is wrong
    this.alertFlag = true;
    this.alertMessage = 'wrong user credential';
  }

  requireSignup(){
    // add UI that shows signup is required
    this.alertFlag = true;
    this.alertMessage = 'signup required';
  }

  loadingEx(){
    // add UI that shows the effects of loading
    this.buttonEffectsFlag = true;
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
      this.signinFailure();
      return;
    }
  }

  redirectToSignup(){
    this.router.navigate(['/signup']);
    return;
  }

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
