import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';
import { product } from './product';

@Injectable()
export class ProductinfoService{

  private user: Observable<firebase.User>;
    constructor(private authService: AuthService) {
      this.user = authService.user;
    }

    public shoppingCart : {product}[] = [];

    loadData(id: string, product: product) {
      // var that = this;
        var data = firebase.database().ref("/producten/"+id+"/").once('value').then(function(snapshot) {
          product.imgLocation = snapshot.child("imgLocation").val();
          product.maxLeentijdDagen = snapshot.child("maxLeentijd").val();
          product.naam = snapshot.child("productNaam").val();
          product.omschrijving = snapshot.child("productOmschrijving").val();
          product.voorraad = snapshot.child("productVoorraad").val();
          console.log(product);
      });
    }

    //Product wordt ingeladen in winkelmandje array in het geheugen.
    //TODO: controleer of hij al in winkelmandje zit.
    addToShoppingCart(product) {
      var that = this;
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log(user);
          that.shoppingCart.push(product);
          that.addProductToDatabase(product, user.uid);
        } else {
          console.log('kan geen product toeveogen, user niet ingelogt!');
        }
      });
    }

    //Schrijf hier product naar winkelmandje in database
    addProductToDatabase(product, uid) {
      console.log('Trying to add product: ' + product['naam'] + ' in the database to user: ' + uid);

      /*firebase.database().ref('leningen/' + product.userId + '/' + product.productId).set({
        opgehaald: true,
        aantal : product.aantal,
        datum_aangevraagd : product.datum,
        inleverdatum : product.inleverdatum
      });*/
    }


}
