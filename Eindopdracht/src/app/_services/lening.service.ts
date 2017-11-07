import { Injectable } from '@angular/core';
import { AngularFireDatabase, } from
'angularfire2/database-deprecated';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
// Importeer models
import { product } from '../_modals/product';
import 'rxjs/add/operator/map';

@Injectable()
export class LeningService{
    leningen: Observable<any[]>;

constructor(
    public afDatabase: AngularFireDatabase,
    public afAuth: AngularFireAuth){
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
           })
        }

}