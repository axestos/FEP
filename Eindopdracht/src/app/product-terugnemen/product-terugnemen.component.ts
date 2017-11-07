import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { lening } from '../product-uitlenen/lening';

// Importeer FireBase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase';

// Importeer services
import { ProductService } from '../_services/product.service'
import { LeningService } from '../_services/lening.service'

import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-product-terugnemen',
  templateUrl: './product-terugnemen.component.html',
  styleUrls: ['./product-terugnemen.component.css']
})
export class ProductTerugnemenComponent implements OnInit {

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
        if (lening.opgehaald){
          this.allesOpgehaald = false;
          return;
        }
        this.allesOpgehaald = true;
      }
   })}

   loanProductClick(lening) {
      var r = confirm("Weet u zeker dat u product " + lening.productNaam + ' van: '+ lening.username +' wilt innemen?');
      if (r == true) {
        this.leningService.deleteLoan(lening);
      }
   }


  ngOnInit() {
  }

}
