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
  public producten : {imgLocation : string, maxLeenTijd : number; productNaam : string; productOmschrijving : string; productVoorraad : number;}[] = [];


  constructor(public hardwareService: HardwareService) {
    this.hardwareList[0] = new hardware();
    this.hardwareList[0].naam = "Arduino";
    this.hardwareList[0].omschrijving = "ArduinoDesc";
    this.hardwareList[0].imgLocation = "https://upload.wikimedia.org/wikipedia/commons/3/38/Arduino_Uno_-_R3.jpg";
    this.hardwareList[0].voorraad = 100;
    this.hardwareList[0].maxLeentijdDagen = 10;

    this.hardwareList[1] = new hardware();
    this.hardwareList[1].naam = "Arduino mini";
    this.hardwareList[1].omschrijving = "ESPDesc";
    this.hardwareList[1].imgLocation = "http://media.rs-online.com/t_large/F7617327-01.jpg";
    this.hardwareList[1].voorraad = 66;
    this.hardwareList[1].maxLeentijdDagen = 6;

    this.producten = hardwareService.producten;

  }


  loadData(){
    this.hardwareService.loadKeys();
  }


 ngOnInit() {
   this.loadData();
 }


}
