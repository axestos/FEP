import { Component, OnInit } from '@angular/core';

//import database
import { AngularFireDatabase, } from
'angularfire2/database-deprecated';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';

//import services
import { ProductService } from '../_services/product.service'

@Component({
  selector: 'app-beschikbarehardware',
  templateUrl: './beschikbarehardware.component.html',
  styleUrls: ['./beschikbarehardware.component.css']
})
export class BeschikbarehardwareComponent implements OnInit {
  producten: FirebaseListObservable<any[]>;

  //wat zijn de permissions?
  public isStudent : boolean;

  //Uit de productService halen we de producten die we daar uit de database hebben gehaald
  constructor(
    private productService : ProductService, private fireAuth : AngularFireAuth) {
      this.producten = productService.producten
  }

 //word gecalled na de constructor
 ngOnInit() {
   this.fireAuth.authState.subscribe(auth => {
     if(auth.email.indexOf("@student.hu.nl") !== -1){
       this.isStudent = true;
     }
     else{
       this.isStudent = false;
     }});

 }


}
