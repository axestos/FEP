//geeft mogelijkheid via constructor iets mee te geven aan bepaalde classes waardoor de component automatisch het object kent
import { Injectable } from '@angular/core';

//import database
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

//handles change of object
import { Observable } from 'rxjs/Observable';

//gebruikt navigeren van ene naar andere pagina en de content opnieuw word geladen terwijl de rest blijft staan
import { Router } from '@angular/router';

@Injectable()
export class AuthService{
  public user: Observable<firebase.User>;

    constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
      this.user = firebaseAuth.authState;
    }

    //bijhouden wie de applicatie gebruikt en wat de rechten zijn
    currentUser : {docent: boolean, username: string} = {docent: null, username: null};


    //authenticatie van de gebruiker
    login(email: string, password: string, error: {message:string}) {
        this.firebaseAuth
          .auth
          .signInWithEmailAndPassword(email, password)
          .then(value => {
            this.currentUser.username = email;
            if (email.indexOf("@student.hu.nl") != -1) {
              this.currentUser.docent = false;
            } else {
              this.currentUser.docent = true;
            }
            this.router.navigateByUrl('/dashboard');
          })
          .catch(err => {
          error.message = err.message;
          });
      }

      //user logout
      logout() {
        this.firebaseAuth
          .auth
          .signOut();
      }

}
