import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AuthService {

  user: Observable<firebase.User>;

    constructor(private firebaseAuth: AngularFireAuth) {
      this.user = firebaseAuth.authState;
    }

    login(email: string, password: string) {
        this.firebaseAuth
          .auth
          .signInWithEmailAndPassword(email, password)
          .then(value => {
            console.log('Logged in!');
          })
          .catch(err => {
            console.log('Er is iets fout gegaan: ',err.message);
          });
      }

      logout() {
        this.firebaseAuth
          .auth
          .signOut();
      }

}