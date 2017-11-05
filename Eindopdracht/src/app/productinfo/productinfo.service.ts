import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class ProductinfoService{

  private user: Observable<firebase.User>;
    constructor(private authService: AuthService) {
      this.user = authService.user;
    }
    

    loadData(id: string, item: {productNaam: string}) {
      // var that = this;
        var product = firebase.database().ref("/producten/"+id+"/").once('value').then(function(snapshot) {
          console.log(snapshot.child("productNaam").val())
          item = {productNaam:snapshot.child("productNaam").val()};
          console.log(item);
      });
    }


}
