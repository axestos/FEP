import { Component, OnInit } from '@angular/core';

//import hardware class om een lijst met hardware objecten mee te maken
import { hardware } from './hardware';

//import database
import { AngularFireDatabase, } from
'angularfire2/database-deprecated';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';

//import services
import { HardwareService} from '../beschikbarehardware/hardware.service';
import { ProductService } from '../_services/product.service'

@Component({
  selector: 'app-beschikbarehardware',
  templateUrl: './beschikbarehardware.component.html',
  styleUrls: ['./beschikbarehardware.component.css']
})
export class BeschikbarehardwareComponent implements OnInit {
  // Deva edit
  producten: FirebaseListObservable<any[]>;

  //lijst met hardware objecten om te vullen vanuit de database en te tonen in html
  public hardwareList:hardware[]=[];

  //Uit de productService halen we de producten die we daar uit de database hebben gehaald
  constructor(
    private productService : ProductService) {
      this.producten = productService.producten
  }


  // loadData(){
  //   this.hardwareService.loadKeys();
  // }


 ngOnInit() {
  //  if(this.hardwareList.length <= 0){
  //    this.loadData();
  //  }
 }


}
