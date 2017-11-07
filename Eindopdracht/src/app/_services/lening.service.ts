import { Injectable } from '@angular/core';
import { AngularFireDatabase, } from
'angularfire2/database-deprecated';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class LeningService{
    leningen: FirebaseListObservable<any[]>;

constructor(
    public afDatabase: AngularFireDatabase,
    public afAuth: AngularFireAuth){
    this.leningen = afDatabase.list('/leningen/');
}
}