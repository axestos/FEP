import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class UitleenService {

  private user: Observable<firebase.User>;

    constructor(private authService: AuthService) {
      this.user = authService.user;
    }

  public leningen : {productNaam : string; aantal : string; datum: string; inleverdatum : string}[] = [];

  public keys : {key: string}[] = [];

    loadKeys() {
      var that = this;
      //TODO de /code moet aangepast worden zodat het van de huidige gebruiker is bij de student
     var leningen = firebase.database().ref("/leningen/");
     leningen.orderByKey().on("child_added", function(data) {
      that.addLoan(data.key);
   });
 }

 addLoan(key) {
   var that = this;
   var leningen = firebase.database().ref("/leningen/" + key);
   leningen.orderByKey().on("child_added", function(data) {

     if(!data.child("opgehaald").val()) {
       that.leningen.push({'productNaam' : data.key, 'aantal' : data.child("aantal").val(), 'datum' : data.child("datum_aangevraagd").val(), 'inleverdatum' : data.child("inleverdatum").val()});
     }


   });
 }


}
