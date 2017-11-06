import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';
import { lening } from './lening';

@Injectable()
export class UitleenService {

  private user: Observable<firebase.User>;

    constructor(private authService: AuthService) {
      this.user = authService.user;
    }

  public users : {username : string};
  public keys : {key: string}[] = [];
  public leningList:lening[]=[];


    loadKeys() {
      var that = this;
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
      that.setLoanValues(data, key);
    }
   });
 }

 setLoanValues(loanData, userId) {
   var productId = loanData.key;
   var that = this;
   var product = firebase.database().ref("/producten/" + productId);

   product.orderByValue().on("value", function(data) {

     var leningInstance:lening = new lening();
     leningInstance.productId = productId;
     leningInstance.opgehaald = loanData.child('opgehaald').val();
     leningInstance.userId = userId;
     leningInstance.imgSrc = data.child("imgLocation").val();
     leningInstance.productNaam = data.child("productNaam").val();
     leningInstance.aantal = loanData.child("aantal").val();
     leningInstance.datum = loanData.child("datum_aangevraagd").val();
     leningInstance.inleverdatum = loanData.child("inleverdatum").val();

     that.leningList.push(leningInstance);

     });

 }

 addUser(key) {
   var that = this;
   var leningen = firebase.database().ref("/leningen/" + key);
   leningen.orderByKey().on("child_added", function(data) {

   });
 }

 setLoaned(product) {
  firebase.database().ref('leningen/' + product.userId + '/' + product.productId).set({
    opgehaald: true,
    aantal : product.aantal,
    datum_aangevraagd : product.datum,
    inleverdatum : product.inleverdatum
  });
  window.location.replace('/productuitlenen');
 }


}
