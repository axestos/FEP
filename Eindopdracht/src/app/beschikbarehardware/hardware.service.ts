import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';
import { hardware } from './hardware';

@Injectable()
export class HardwareService {

  private user: Observable<firebase.User>;

    constructor(private authService: AuthService) {
      this.user = authService.user;
    }



  public users : {username : string};
  public keys : {key: string}[] = [];
  public hardwareList:hardware[]=[];

    loadKeys() {
      var that = this;
      var producten = firebase.database().ref("/producten/");
      producten.orderByKey().on("child_added", function(data) {
        that.addProduct(data.key);
   });
 }



 addProduct(key) {
     var that = this;
     var producten = firebase.database().ref("/producten/" + key);
     var product = firebase.database().ref("/producten/"+key+"/").once('value').then(function(data) {
     var hardwareComponent:hardware = new hardware();
     hardwareComponent.naam = data.child("productNaam").val();
     hardwareComponent.maxLeentijdDagen = data.child("maxLeentijd").val();
     hardwareComponent.imgLocation = data.child("imgLocation").val();
     hardwareComponent.omschrijving = data.child("productOmschrijving").val();
     hardwareComponent.voorraad = data.child("productVoorraad").val();;
     that.hardwareList.push(hardwareComponent);
 });
 }


 }
