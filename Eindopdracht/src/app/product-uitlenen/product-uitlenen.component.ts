import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { UitleenService} from '../product-uitlenen/uitleen.service';

@Component({
  selector: 'app-product-uitlenen',
  templateUrl: './product-uitlenen.component.html',
  styleUrls: ['./product-uitlenen.component.css']
})
export class ProductUitlenenComponent implements OnInit {

 public leningenList : {productnaam : string; aantal : number; datum_aangevraagd: string; inleverdatum : string;}[] = [];

 public test : {aantal : string;}[] = [];

   constructor(public uitleenService: UitleenService) {
     this.test = uitleenService.test;
   }

   loadData(){
     this.uitleenService.loadData();

     console.log(this.test);

   }
  //  loadData() {
  //    var leningen = firebase.database().ref("leningen/");
  //    leningen.orderByKey().on("child_added", function(data) {
   //
  //      this.leningenList.push({'productnaam' : data.key, 'aantal' : data.val().aantal, 'datum_aangevraagd' : data.val().datum_aangevraagd, 'inleverdatum' : data.val().inleverdatum});
   //
  //    });
  //  }

  ngOnInit() {
  }
}
