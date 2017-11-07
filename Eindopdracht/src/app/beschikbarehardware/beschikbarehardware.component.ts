import { Component, OnInit } from '@angular/core';
import { hardware } from './hardware';
import { HardwareService} from '../beschikbarehardware/hardware.service';


@Component({
  selector: 'app-beschikbarehardware',
  templateUrl: './beschikbarehardware.component.html',
  styleUrls: ['./beschikbarehardware.component.css']
})
export class BeschikbarehardwareComponent implements OnInit {

  public hardwareList:hardware[]=[];

  constructor(public hardwareService: HardwareService) {
    this.hardwareList = hardwareService.hardwareList;
  }


  loadData(){
    this.hardwareService.loadKeys();
  }


 ngOnInit() {
   if(this.hardwareList.length <= 0){
     this.loadData();
   }
 }


}
