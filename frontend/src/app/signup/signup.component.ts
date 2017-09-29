import { Component, OnInit } from '@angular/core';
import { SignupService} from './signup.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signupService: SignupService, private router: Router) { }

  ngOnInit() {
  }

  buttonEffectsFlag = false;
  alertMessage: String;
  alertFlag= false;

  signupSuccess(){
    // add UI that shows the success of signingup
    this.alertFlag = true;
    this.alertMessage = 'sign up succeeds';
  }

  signupFailure(){
    // add UI that shows the failure of signup
    this.alertFlag = true;
    this.alertMessage = 'sign up failed';
  }

  repeatedAccount(){
    this.alertFlag = true;
    this.alertMessage = 'username already registered';
  }

  infoRequired(){
    // add UI that warns user to fill out all the information
    this.alertFlag = true;
    this.alertMessage = 'fill out all blanks';
  }

  internalError(){
    this.buttonEffectsFlag = false;
    this.alertFlag = true;
    this.alertMessage = 'sever error, try later';
  }

    // helper
  checkDbResponse(response: any){
    console.log(response);
    // add functions that process the response
    if(response.signupSuccess){
      this.signupSuccess();
      return;
    }

    if(response.repeatedAccount){
      this.repeatedAccount();
      return;
    }
    this.signupFailure();
    return;
  }

  signupAccount(username, password, email){

    if(username.length == 0 || password.length == 0 || email.length == 0){
      this.infoRequired();
      return;
    }
    this.buttonEffectsFlag = true;
    this.signupService.signupAccount({"username":username, "password":password, "email": email})
                      .subscribe(response => this.checkDbResponse(response),
                                  error => this.internalError(),
                                  () => this.buttonEffectsFlag = false );

  }

  redirectToLogin(){
    this.router.navigate(['/login']);
    return;
  }

}
