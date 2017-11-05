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


  public test : {productNaam : string;}[] = [];

    loadData(id: string) {
        var leningen = firebase.database().ref("/leningen/");
        leningen.orderByKey().on("child_added", function(data) {
            console.log(data.key);
      });
    }


}
