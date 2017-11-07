import { Injectable } from '@angular/core';
import { AngularFireDatabase, } from
'angularfire2/database-deprecated';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class ProductService{
    producten: FirebaseListObservable<any[]>;

constructor(
    public afDatabase: AngularFireDatabase,
    public afAuth: AngularFireAuth){
    this.producten = afDatabase.list('/producten/');
}
}