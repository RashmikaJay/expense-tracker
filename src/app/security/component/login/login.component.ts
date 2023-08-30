import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import { GoogleAuthProvider } from 'firebase/auth';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private afa: AngularFireAuth) {
  }
    loginForm: FormGroup = new FormGroup({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    });

    login():void{
      console.log(this.loginForm.get('email')?.value)
      console.log(this.loginForm.get('password')?.value)
    }

  loginWithGoogle(){
      return this.Authlogin(new GoogleAuthProvider())
  }

  Authlogin(provider:any):any{
     return  this.afa.signInWithPopup(provider).then((response)=>{
        console.log('You have been logged in successfully');
      }).catch((err)=>{
        console.log(err);
      })
  }
}

