import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductinfoService} from '../productinfo/productinfo.service';
import { product } from './product';


@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit, OnDestroy {
  private sub: any;
  
 id: string;
 public test : {productNaam: string};
 public product: product;

  constructor(private route: ActivatedRoute, public productinfoService: ProductinfoService) {
    this.product = new product();
  }
   ngOnDestroy() {
    this.sub.unsubscribe();
  }

  loadData() {
    this.productinfoService.loadData(this.id, this.product);
  }

  getInleverdatum(): string{
    let inleverDatum = new Date()
    inleverDatum.setDate(inleverDatum.getDate() + this.product.maxLeentijdDagen);
    var mm = inleverDatum.getMonth() + 1; // getMonth() is zero-based
    var dd = inleverDatum.getDate();
  
    return [(dd>9 ? '' : '0') + dd,"-",
            (mm>9 ? '' : '0') + mm,"-",
            inleverDatum.getFullYear()
           ].join('');
  }

  getMinDatum(){
    let minDatum = new Date()
    minDatum.setDate(minDatum.getDate() + 1);
    return this.formatDate(minDatum);
  }


  getMaxDatum(){
    let maxDatum = new Date()
    maxDatum.setDate(maxDatum.getDate() + this.product.maxLeentijdDagen);
    return this.formatDate(maxDatum);
  }

  formatDate(date: Date){
    var mm = date.getMonth() + 1; // getMonth() is zero-based
    var dd = date.getDate();
  
    return [date.getFullYear(),"-",
            (mm>9 ? '' : '0') + mm,"-",
            (dd>9 ? '' : '0') + dd
           ].join('');

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.loadData();
      console.log(this.product);
    });   
}
}
