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

  public leningen : {userId : string, productName : string; imgSrc : string; productNaam : string; aantal : string; datum: string; inleverdatum : string}[] = [];

  public users : {username : string};

  public keys : {key: string}[] = [];

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
     var imgLocation = data.child("imgLocation").val();
     var productName = data.child("productNaam").val();
     that.leningen.push({'userId' : userId, 'productName' : productName ,'imgSrc' : imgLocation,'productNaam' : productName, 'aantal' : loanData.child("aantal").val(), 'datum' : loanData.child("datum_aangevraagd").val(), 'inleverdatum' : loanData.child("inleverdatum").val()});
   });

 }

 addUser(key) {
   var that = this;
   var leningen = firebase.database().ref("/leningen/" + key);
   leningen.orderByKey().on("child_added", function(data) {

   });
 }


}
