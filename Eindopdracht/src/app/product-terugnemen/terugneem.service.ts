//import database
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

//import services
import { AuthService } from '../auth/auth.service';

//import lening class om een lijst met lening objecten te maken en deze te vullen aan de hand van de database
import { lening } from '../product-uitlenen/lening';

//gebruikt navigeren van ene naar andere pagina en de content opnieuw word geladen terwijl de rest blijft staan
import { Router } from '@angular/router';

@Injectable()
export class TerugneemService {

  private user: Observable<firebase.User>;

    //zet de gebruiker die gebruik maakt van de service
    constructor(private authService: AuthService,
      private router: Router) {
      this.user = authService.user;
    }

  //user details
  public users : {username : string};
  public email : string;

  public keys : {key: string}[] = [];

  //array met leningen die we vullen met data vanuit de database
  public leningList:lening[]=[];

  loadKeys() {
      var that = this;
      var leningen = firebase.database().ref("/leningen/");
      leningen.orderByKey().on("child_added", function(data) {
      that.addLoan(data.key);
   });
 }

 //haal email op die past bij een bepaalde UserId uit de tabel users
 getUserEmail(userId):Promise<void> {
   return new Promise<void>(resolve =>{
   var that = this;
    var user = firebase.database().ref('/users/'+userId);
    user.orderByValue().on('value', function(data)
    {
      that.email = data.child("email").val();
      console.log(that.email);
      resolve();
    }
  )
 })}

 //vraag aanmaken van lening object aan voor een lening met een meegegeven key
 addLoan(key) {
   var that = this;
   var leningen = firebase.database().ref("/leningen/" + key);
   leningen.orderByKey().on("child_added", function(data) {
   if(data.child("opgehaald").val()) {
      that.setLoanValues(data, key);
    }
   });
 }

 //aanmaken lening object aan de hand van via db opgehaalde data waarna deze in de array met leningen word gezet
 setLoanValues(loanData, userId) {
   var productId = loanData.key;
   var that = this;
   var product = firebase.database().ref("/producten/" + productId);

   product.orderByValue().on("value", function(data) {
     that.getUserEmail(userId).then(function(){
       var leningInstance:lening = new lening();

       leningInstance.productId = productId;
       leningInstance.opgehaald = loanData.child('opgehaald').val();
       leningInstance.userId = userId;
       leningInstance.userEmail = that.email;
       leningInstance.imgSrc = data.child("imgLocation").val();
       leningInstance.productNaam = data.child("productNaam").val();
       leningInstance.aantal = loanData.child("aantal").val();
       leningInstance.datum = loanData.child("datum_aangevraagd").val();
       leningInstance.inleverdatum = loanData.child("inleverdatum").val();

       that.leningList.push(leningInstance);

     });
   });

 }

 addUser(key) {
   var that = this;
   var leningen = firebase.database().ref("/leningen/" + key);
   leningen.orderByKey().on("child_added", function(data) {

   });
 }

 deleteLoan(product) {
  firebase.database().ref('leningen/' + product.userId + '/' + product.productId).remove();
  this.setStock(product.productId, product.aantal);
  // this.router.navigateByUrl('/dashboard');
  // window.location.replace('/productterugnemen');
 }

setStock(productId, productAantal){
  //TODO: Huidge aantal ophalen
  var currentStockInDB = firebase.database().ref('producten/'+productId);
  var currentStock;
  currentStockInDB.once('value').then(function(data) {
    currentStock = data.child("productVoorraad").val();
    var newStock = currentStock + productAantal;
    firebase.database().ref('producten/'+productId+'/productVoorraad').set(newStock);
});

}

}
