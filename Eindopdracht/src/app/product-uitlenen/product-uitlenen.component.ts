import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { UitleenService} from '../product-uitlenen/uitleen.service';
import {Router} from '@angular/router';
import { lening } from './lening';

@Component({
  selector: 'app-product-uitlenen',
  templateUrl: './product-uitlenen.component.html',
  styleUrls: ['./product-uitlenen.component.css']
})
export class ProductUitlenenComponent implements OnInit {


  public leningList:lening[]=[];

   constructor(public uitleenService: UitleenService, private router: Router) {
     this.leningList = uitleenService.leningList;

     //TODO: dit globaal ergens neerzetten
    //  this.router.events.subscribe(event => {
    //     if (event.constructor.name === 'NavigationStart') {
    //       console.log(event);

    //       if(event['url'] === '/productuitlenen') {
    //         var table = document.getElementsByClassName('table')[0];
    //         table.innerHTML = '';
    //       }
    //     }
    //  });
   }

   loadData(){
     this.uitleenService.loadKeys();
   }

   loanProductClick(product) {
      var r = confirm("Weet u zeker dat u product " + product.productNaam + ' aan: '+ product.userId +' wilt uitlenen?');
      if (r == true) {
        this.uitleenService.setLoaned(product);
      }
   }


  ngOnInit() {
    if(this.leningList.length <= 0){
      this.loadData();
    }
  }
}
