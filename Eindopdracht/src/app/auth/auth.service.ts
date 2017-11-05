import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
// import * as firedb from 'firebase/database';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AuthService {

  public user: Observable<firebase.User>;

    constructor(private firebaseAuth: AngularFireAuth) {
      this.user = firebaseAuth.authState;
    }

    login(email: string, password: string, error: {message:string}) {
        this.firebaseAuth
          .auth
          .signInWithEmailAndPassword(email, password)
          .then(value => {
            console.log('Logged in!');

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
