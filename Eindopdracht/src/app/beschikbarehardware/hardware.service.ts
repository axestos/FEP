//importeren database
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

//importeren services
import { AuthService } from '../auth/auth.service';

//import hardware class om een lijst met hardware objecten mee te maken
import { hardware } from './hardware';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class HardwareService {

  //set de gebruiker die gebruik maakt van de service
  private user: Observable<firebase.User>;
    constructor(private authService: AuthService) {
      this.user = authService.user;
    }


  //user details
  public users : {username : string};
  public keys : {key: string}[] = [];

  //lijst met hardware objecten om te vullen vanuit de database en te tonen in html
  public hardwareList:hardware[]=[];

  loadKeys() {
    var that = this;
    var producten = firebase.database().ref("/producten/");
    producten.orderByKey().on("child_added", function(data) {
      that.addProduct(data.key);
   });
 }


 //product toevoegen aan array met hardware objecten
 addProduct(key) {
     var that = this;
     var producten = firebase.database().ref("/producten/" + key);
     var product = firebase.database().ref("/producten/"+key+"/").once('value').then(function(data) {
     var hardwareComponent:hardware = new hardware();
     hardwareComponent.naam = data.child("productNaam").val();
     hardwareComponent.maxLeentijdDagen = data.child("maxLeentijd").val();
     hardwareComponent.imgLocation = data.child("imgLocation").val();
     hardwareComponent.omschrijving = data.child("productOmschrijving").val();
     hardwareComponent.voorraad = data.child("productVoorraad").val();

     //geen hardware laden die niet beschikbaar (of 'uileenbaar') is
     if(hardwareComponent.voorraad > 0){
       that.hardwareList.push(hardwareComponent);
     }
 });
 }


 }
