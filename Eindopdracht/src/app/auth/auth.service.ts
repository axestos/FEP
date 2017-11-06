import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AuthService{
  public user: Observable<firebase.User>;

    constructor(private firebaseAuth: AngularFireAuth) {
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
            // this.globals.currentUser.username = email;
            // this.globals.setUsername(email);
            // console.log(this.globals.currentUser.username);
            if (email.indexOf("@student.hu.nl") != -1) {
              this.currentUser.docent = false;
              // this.globals.currentUser.docent = false;
              // this.globals.setDocent(false);
            } else {
              this.currentUser.docent = true;
              // this.globals.currentUser.docent = true;
              // this.globals.setDocent(true);
            }
            // console.log(this.globals.currentUser.docent);

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
