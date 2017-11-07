import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductinfoService} from '../productinfo/productinfo.service';
import { product } from '../_modals/product';
import { dateHelper } from '../_helpers/date.helper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit, OnDestroy {
  private sub: any;
  leningForm : FormGroup;

 public id: string;
  public product: product;
 public dateHelper: dateHelper = new dateHelper();

  constructor(
    private route: ActivatedRoute, 
    public productinfoService: ProductinfoService,
    fb: FormBuilder) {
    this.product = new product();
    this.leningForm = fb.group({
      // We can set default values by passing in the corresponding value or leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
      'aantal' : [null, Validators.required],
      'terugbrengenOp': [null, Validators.required],
    })
  }
   ngOnDestroy() {
    this.sub.unsubscribe();
  }

  loadData() {
    this.productinfoService.loadData(this.id, this.product);
  }


  shoppingCartClick(product: product) {
    this.productinfoService.addToShoppingCart(product);
  }

 
  vraagLeningAan(formData: any){
    let datum = this.dateHelper.toDate(formData.terugbrengenOp);
    if (formData.aantal <= this.product.voorraad && formData.aantal > 0){
      console.log("veilig");
      if (datum <= (this.product.getInleverdatum()) && datum > new Date())  {
        console.log("ook veilig");
      }
    }
    console.log(formData.aantal);
    console.log(formData.terugbrengenOp);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.loadData();
    });
}
}
