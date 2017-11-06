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
     var imgLocation = data.child("imgLocation").val();
     var maxLeenTijd = data.child("maxLeentijd").val();
     var productNaam = data.child("productNaam").val();
     var productOmschrijving = data.child("productOmschrijving").val();
     var productVoorraad = data.child("productVoorraad").val();
     var hardwareComponent:hardware = new hardware();
     hardwareComponent.naam = productNaam;
     hardwareComponent.maxLeentijdDagen = maxLeenTijd;
     hardwareComponent.imgLocation = imgLocation;
     hardwareComponent.omschrijving = productOmschrijving
     hardwareComponent.voorraad = productVoorraad;
     that.hardwareList.push(hardwareComponent);
 });
 }


 }
