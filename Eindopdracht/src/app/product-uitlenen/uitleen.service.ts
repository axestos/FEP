import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class UitleenService {

  private user: Observable<firebase.User>;

    constructor(private authService: AuthService) {
      this.user = authService.user;
    }

  //  public leningenList : {productnaam : string; aantal : number; datum_aangevraagd: string; inleverdatum : string;}[] = [];

  //public leningenList : {productnaam : string; aantal : number; datum_aangevraagd: string; inleverdatum : string;}[] = [];
  public test : {aantal : string;}[] = [];

    loadData() {
      var that = this;
     var leningen = firebase.database().ref("leningen/EcMaCzZ4p0RQq4GBws1O3kiGu9y2/");
     leningen.orderByKey().on("child_added", function(data) {
       //console.log(data.child("aantal").val());
       that.test.push({'aantal' : data.child("aantal").val()});
       //test.test1 = that.test;

       //this.leningenList.push({'productnaam' : data.key, 'aantal' : data.val().aantal, 'datum_aangevraagd' : data.val().datum_aangevraagd, 'inleverdatum' : data.val().inleverdatum});
   });
 }


}
