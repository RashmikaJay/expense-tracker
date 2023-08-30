import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SecurityRoutingModule} from './security-routing.module';
import {SecurityComponent} from './security.component';
import {LoginComponent} from './component/login/login.component';
import {SignupComponent} from './component/signup/signup.component';
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    SecurityComponent,
    LoginComponent,
    SignupComponent
  ],
  exports: [
    SecurityComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,

  ]
})
export class SecurityModule {
}
