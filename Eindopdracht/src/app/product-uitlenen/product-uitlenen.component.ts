import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { lening } from './lening';

// Importeer FireBase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase';

// Importeer services
import { ProductService } from '../_services/product.service'
import { LeningService } from '../_services/lening.service'

import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-product-uitlenen',
  templateUrl: './product-uitlenen.component.html',
  styleUrls: ['./product-uitlenen.component.css']
})
export class ProductUitlenenComponent implements OnInit {

  leningen: Observable<any[]>;
  allesOpgehaald = true;

  public leningList:lening[] = [];


  constructor(
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


   loanProductClick(lening) {
      // var r = confirm("Weet u zeker dat u product " + product.productNaam + ' aan: '+ product.userEmail +' wilt uitlenen?');
      var r = confirm("Weet u zeker dat u product " + lening.productNaam + ' aan: '+ lening.username +' wilt uitlenen?');
      if (r == true) {
        this.leningService.leningOphalen(lening);
      }
   }



  ngOnInit() {
  }
}
