import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { LoginComponent } from './login/login.component';
import { ProductUitlenenComponent} from './product-uitlenen/product-uitlenen.component';
import {ProductTerugnemenComponent} from './product-terugnemen/product-terugnemen.component';
const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'productinfo',
    component: ProductinfoComponent
  },
  {
    path: 'productuitlenen',
    component: ProductUitlenenComponent
  },
  {
    path: 'productterugnemen',
    component: ProductTerugnemenComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
