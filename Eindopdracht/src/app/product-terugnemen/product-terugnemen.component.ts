import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { TerugneemService} from './terugneem.service';
import {Router} from '@angular/router';
import { lening } from '../product-uitlenen/lening';

@Component({
  selector: 'app-product-terugnemen',
  templateUrl: './product-terugnemen.component.html',
  styleUrls: ['./product-terugnemen.component.css']
})
export class ProductTerugnemenComponent implements OnInit {
  public leningList:lening[]=[];

   constructor(public terugneemservice: TerugneemService, private router: Router) {
     this.leningList = terugneemservice.leningList;

     //TODO: dit globaal ergens neerzetten
    //  this.router.events.subscribe(event => {
    //     if (event.constructor.name === 'NavigationStart') {
    //       console.log(event);

    //       if(event['url'] === '/productterugnemen') {
    //         var table = document.getElementsByClassName('table')[0];
    //         table.innerHTML = '';
    //       }
    //     }
    //  });
   }
   loadData(){
     this.terugneemservice.loadKeys();
   }

   loanProductClick(product) {
      var r = confirm("Weet u zeker dat u product " + product.productNaam + ' van: '+ product.userEmail +' wilt terugnemen?');
      if (r == true) {
        this.terugneemservice.deleteLoan(product);
      }
   }


  ngOnInit() {
    if(this.leningList.length <= 0){
      this.loadData();
    }
  }

}
