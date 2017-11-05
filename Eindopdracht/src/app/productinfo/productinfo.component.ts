import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductinfoService} from '../productinfo/productinfo.service';


@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit, OnDestroy {
  private sub: any;
  
 id: string;
 public test : {productNaam: string};
  constructor(private route: ActivatedRoute, public productinfoService: ProductinfoService) {
    this.test = {productNaam : "Jaap"};
  }
   ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log("werkt het: "+this.id)
      this.productinfoService.loadData(this.id, this.test);
      console.log(this.test);
    });   
}
productNaam = 'Product '+this.id  ;
maximaalTeLenen = 3;
uiterlijkeDatum = '01-12-2018';
productInfo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla ligula,'
+'fermentum id velit quis, condimentum accumsan ipsum. Fusce tristique enim lacus, eget suscipit dui dapibus vel.'
+'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
+'Curabitur dignissim sapien et ligula consequat, nec ullamcorper turpis accumsan.'
+'Vivamus posuere feugiat arcu, et gravida leo pellentesque a. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
+'Cras vitae lectus erat. Nullam vestibulum tincidunt sem eget lobortis. In laoreet ultrices sapien, at scelerisque diam pretium eget.'
+'Fusce orci turpis, suscipit quis porttitor in, accumsan sed dolor. Duis porttitor pretium nibh, commodo bibendum elit dictum non.'
}
