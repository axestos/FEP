import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
@Injectable()
export class AuthService{
  public user: Observable<firebase.User>;

    constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
      this.user = firebaseAuth.authState;
    }

    currentUser : {docent: boolean, username: string} = {docent: null, username: null};

    login(email: string, password: string, error: {message:string}) {
        this.firebaseAuth
          .auth
          .signInWithEmailAndPassword(email, password)
          .then(value => {
            console.log('Logged in!');
            this.currentUser.username = email;
            if (email.indexOf("@student.hu.nl") != -1) {
              this.currentUser.docent = false;
            } else {
              this.currentUser.docent = true;
            }
            this.router.navigateByUrl('/dashboard');
          })
          .catch(err => {
            console.log('Er is iets fout gegaan: ',err.message);
          error.message = err.message;
          });
      }


      logout() {
        this.firebaseAuth
          .auth
          .signOut();
          console.log("Uitgelogd")
      }

}
