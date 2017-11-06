import { Component, OnInit } from '@angular/core';
import { hardware } from './hardware';
import { HardwareService} from '../beschikbarehardware/hardware.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-beschikbarehardware',
  templateUrl: './beschikbarehardware.component.html',
  styleUrls: ['./beschikbarehardware.component.css']
})
export class BeschikbarehardwareComponent implements OnInit {

  public hardwareList:hardware[]=[];

  constructor(public hardwareService: HardwareService, private router:Router) {
    this.hardwareList = hardwareService.hardwareList;
    //TODO: dit globaal ergens neerzetten
    this.router.events.subscribe(event => {
       if (event.constructor.name === 'NavigationStart') {
         console.log(event);

         if(event['url'] === '/beschikbarehardware') {
           var table = document.getElementsByClassName('table')[0];
           table.innerHTML = '';
         }
       }
    });

  }


  loadData(){
    this.hardwareService.loadKeys();
  }


 ngOnInit() {
   this.loadData();
 }


}
