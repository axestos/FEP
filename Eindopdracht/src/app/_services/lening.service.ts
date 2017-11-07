import { Injectable } from '@angular/core';
import { AngularFireDatabase, } from
'angularfire2/database-deprecated';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
// Importeer models
import { product } from '../_modals/product';
import { ProductService } from './product.service';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class LeningService{
    leningen: Observable<any[]>;

constructor(
    public afDatabase: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    private router: Router,
    public productService : ProductService){
        this.leningen = this.afDatabase.list('/leningen/')
        .map(leningen => {
            leningen.map(l => {
                this.afDatabase.database.ref('/producten/'+l.product_key).once('value').then(function(snapshot) {
                    l.productNaam = snapshot.child("productNaam").val();
                    l.imgLocation = snapshot.child("imgLocation").val();
                })
                this.afDatabase.database.ref('/users/'+l.user_key).once('value').then(function(snapshot) {
                    l.username = snapshot.child("email").val();
                })

            });
            return leningen;
        });


}

    leningOphalen(lening) {
    this.afDatabase.database.ref('leningen/'+lening.$key).set({
        opgehaald: true,
        aantal : lening.aantal,
        datum_aangevraagd : lening.datum_aangevraagd,
        inleverdatum : lening.inleverdatum,
        product_key : lening.product_key,
        user_key : lening.user_key
    });
   }

    vraagLeningAan(id, aantal, datum_aangevraagd, inleverdatum){
        this.afAuth.authState.subscribe(auth => {
            this.afDatabase.database.ref('leningen/').push(
                {
                      "aantal" : aantal,
                      "datum_aangevraagd" : datum_aangevraagd,
                      "inleverdatum" : inleverdatum,
                      "opgehaald" : false,
                      "product_key" : id,
                      "user_key" : auth.uid
                })
                this.router.navigateByUrl('/beschikbarehardware');
           })
        }


         deleteLoan(lening) {
           console.log(typeof(lening.product_key));
           this.setStock(lening.product_key, lening.aantal);
           this.afDatabase.database.ref('leningen/' + lening.$key ).remove();
          // this.router.navigateByUrl('/dashboard');
          // window.location.replace('/productterugnemen');
         }

        setStock(productId, productAantal){
          this.productService.setStock(productId, productAantal);

        }
}
