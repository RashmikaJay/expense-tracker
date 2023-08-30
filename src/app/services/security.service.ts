import {Injectable} from '@angular/core';
import {getAuth, GoogleAuthProvider, signInWithPopup} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private rout: Router, private afs: AngularFireAuth, private toaster: ToastrService) {
  }

  loginWithGoogle() {

    this.afs.signInWithPopup(new GoogleAuthProvider()).then(res => {
      this.rout.navigateByUrl('/dashboard')
    }).catch(error => {
      console.log('Something went wrong...!')
    })

  }

  singWithEmailadnPassword(email: any, password: any) {
    this.afs.signInWithEmailAndPassword(email, password).then(res => {
      this.rout.navigateByUrl('/dashboard')
    }).catch(error => {
      console.log('Something went wrong...!')
    })
  }

  createUser(email: any, password: any) {
    this.afs.createUserWithEmailAndPassword(email, password).then(res => {
      this.toaster.success('User has been created Successfully...!')
    }).catch(error => {
      this.toaster.error('Something went wrong...!')
    })
  }
}
