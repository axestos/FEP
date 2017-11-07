import { Component, OnInit } from '@angular/core';

//
import {Router} from '@angular/router';

//import lening class
import { lening } from './lening';

// Importeer FireBase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase';

// Importeer services
import { ProductService } from '../_services/product.service'
import { LeningService } from '../_services/lening.service'
import { UitleenService} from '../product-uitlenen/uitleen.service';

import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-product-uitlenen',
  templateUrl: './product-uitlenen.component.html',
  styleUrls: ['./product-uitlenen.component.css']
})
export class ProductUitlenenComponent implements OnInit {

  leningen: Observable<any[]>;
  allesOpgehaald = true;

  //array with lening objecten die we volladen in de constructor
  public leningList:lening[] = []

  //Uit de uitleenService halen de leningen die we daar uit de database hebben gehaald
   constructor(
     public uitleenService: UitleenService,
     private router: Router,
     private leningService: LeningService,
     public productService: ProductService
    ) {
    this.leningen = leningService.leningen;
    this.leningen.subscribe(leningen => {
      let leningTemp = leningen as lening[];
      for (let lening of leningTemp){
        if (!lening.opgehaald){
          this.allesOpgehaald = false;
          return;
        }
        this.allesOpgehaald = true;
      }
   })}

   //build de lijst met leningen in de uitleenService
   loadData(){
     this.uitleenService.loadKeys();
   }

   //afhandeling van het klikken op
   loanProductClick(lening) {
      // var r = confirm("Weet u zeker dat u product " + product.productNaam + ' aan: '+ product.userEmail +' wilt uitlenen?');
      var r = confirm("Weet u zeker dat u product " + lening.productNaam + ' aan: '+ lening.username +' wilt uitlenen?');
      if (r == true) {
        this.leningService.leningOphalen(lening);
      }
   }



  ngOnInit() {
    // if(this.leningList.length <= 0){
    //   this.loadData();
    // }
  }
}
