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


}
