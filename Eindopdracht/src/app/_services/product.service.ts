import { Injectable } from '@angular/core';
import { AngularFireDatabase, } from
'angularfire2/database-deprecated';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';

// Importeer models
import { product } from '../_modals/product';
import { lening } from '../product-uitlenen/lening';
@Injectable()
export class ProductService{
    producten: FirebaseListObservable<any[]>;

constructor(
    private afDatabase: AngularFireDatabase,
    public afAuth: AngularFireAuth){
    this.producten = afDatabase.list('/producten/');
}

getProductNaam(id: string){
    this.afDatabase.database.ref('/producten/' + id).once('value').then(function(snapshot) {
        id = snapshot.child("productNaam").val();
    })
}

getProduct(id: string, product: product){
    this.afDatabase.database.ref('/producten/' + id)
    .once('value').then(function(snapshot) {
        product.imgLocation = snapshot.child("imgLocation").val();
        product.maxLeentijdDagen = snapshot.child("maxLeentijd").val();
        product.naam = snapshot.child("productNaam").val();
        product.omschrijving = snapshot.child("productOmschrijving").val();
        product.voorraad = snapshot.child("productVoorraad").val();
    })
}

setStock(id : number, productAantal : number) {
  var currentStock;
  var that = this;
  this.afDatabase.database.ref('producten/'+id).once('value').then(function(data) {
    currentStock = data.child("productVoorraad").val();
    currentStock = currentStock + productAantal;
    that.afDatabase.database.ref('producten/'+id+'/productVoorraad').set(currentStock);
  });
}
}
