import { Component, OnInit } from '@angular/core';
import { hardware } from './hardware';
import { HardwareService} from '../beschikbarehardware/hardware.service';


import { AngularFireDatabase, } from
'angularfire2/database-deprecated';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProductService } from '../_services/product.service'

@Component({
  selector: 'app-beschikbarehardware',
  templateUrl: './beschikbarehardware.component.html',
  styleUrls: ['./beschikbarehardware.component.css']
})
export class BeschikbarehardwareComponent implements OnInit {
  // Deva edit
  producten: FirebaseListObservable<any[]>;

  public hardwareList:hardware[]=[];

  constructor(
    // public hardwareService: HardwareService,
    private productService : ProductService) {
      this.producten = productService.producten
    // this.hardwareList = hardwareService.hardwareList;
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
