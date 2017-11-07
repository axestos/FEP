import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../_modals/product';
import { dateHelper } from '../_helpers/date.helper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

// Importeer services
import { ProductService } from '../_services/product.service'
import { LeningService } from '../_services/lening.service'

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
  public aantalError = null;
  public datumError = null;

  constructor(
    private route: ActivatedRoute,
    private productService : ProductService,
    private leningService : LeningService,
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

  vraagLeningAan(formData: any){
    let datum = this.dateHelper.toDate(formData.terugbrengenOp);
    let aantal = parseInt(formData.aantal);
    if (formData.aantal <= this.product.voorraad && aantal > 0){
      this.aantalError = null;
    } else {
      this.aantalError = "Aantal moet tussen 1 en " + this.product.voorraad+" liggen";
    }
    if (datum <= (this.product.getInleverdatum()) && datum >= new Date())  {
      this.datumError = null;
    } else {
      this.datumError = "Datum moet tussen "+this.dateHelper.formatDate(this.product.getMinDatum())+" en "+ this.dateHelper.formatDate(this.product.getMaxDatum())+ " liggen"
    }
    if (this.aantalError === null && this.datumError === null){
      let bevestig = confirm("Weet u zeker dat u "+aantal+" x " + this.product.naam + " wilt lenen tot "+ this.dateHelper.formatDate(datum)+"?");
      if (bevestig == true) {
        this.leningService.vraagLeningAan(this.id, aantal, this.dateHelper.formatDate(new Date), this.dateHelper.formatDate(datum));
    }
  }}
  



  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.productService.getProduct(this.id, this.product);
    });
}
}
