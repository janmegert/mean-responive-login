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

  verifyCredentials(username: String , password: String){
    if(username.length == 0 || password.length ==0){
      console.log('enter credentials');  
      return;
    }
    this.loginService.verifyCredentials({"username": username, "password": password})
                      .subscribe(response => { console.log (response)},
                                  error => {},
                                  ()=>{} );
  }

}
