import { Component, OnInit } from '@angular/core';

//import database
import * as firebase from 'firebase';

//import services
import { TerugneemService} from './terugneem.service';

//gebruikt navigeren van ene naar andere pagina en de content opnieuw word geladen terwijl de rest blijft staan
import {Router} from '@angular/router';

//import lening class om objecten van te maken en deze in een array te bewaren
import { lening } from '../product-uitlenen/lening';

@Component({
  selector: 'app-product-terugnemen',
  templateUrl: './product-terugnemen.component.html',
  styleUrls: ['./product-terugnemen.component.css']
})
export class ProductTerugnemenComponent implements OnInit {

  //array met lening die gevult word overgenomen uit de service
  public leningList:lening[]=[];

   //haal de leningen op uit de terugneemservice
   constructor(public terugneemservice: TerugneemService, private router: Router) {
     this.leningList = terugneemservice.leningList;
   }

   //laat de terugneemservice de array met leningen builden
   loadData(){
     this.terugneemservice.loadKeys();
   }

   //confirm verwijdering van lening
   loanProductClick(product) {
      var r = confirm("Weet u zeker dat u product " + product.productNaam + ' van: '+ product.userEmail +' wilt innemen?');
      if (r == true) {
        this.terugneemservice.deleteLoan(product);
      }
   }

  //laad de array met leningen vanuit de terugneemservice als deze leeg is
  ngOnInit() {
    if(this.leningList.length <= 0){
      this.loadData();
    }
  }

}
