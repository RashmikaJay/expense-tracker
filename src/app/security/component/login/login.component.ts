import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SecurityService} from "../../../services/security.service";




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!:FormGroup;

  login(){}



  constructor(private fb:FormBuilder,private service:SecurityService) {
    this.loginForm =fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  get fc(){
    return this.loginForm.controls;
  }

  loginWithGoogle(){
    this.service.loginWithGoogle();
  }


  // constructor(private afa: AngularFireAuth) {
  // }
  //   loginForm: FormGroup = new FormGroup({
  //     email: new FormControl('',Validators.required),
  //     password: new FormControl('',Validators.required)
  //   });
  //
  //   login():void{
  //     console.log(this.loginForm.get('email')?.value)
  //     console.log(this.loginForm.get('password')?.value)
  //   }
  //
  // loginWithGoogle(){
  //     return this.Authlogin(new GoogleAuthProvider())
  // }
  //
  // Authlogin(provider:any):any{
  //    return  this.afa.signInWithPopup(provider).then((response)=>{
  //       console.log('You have been logged in successfully');
  //     }).catch((err)=>{
  //       console.log(err);
  //     })
  // }
}

