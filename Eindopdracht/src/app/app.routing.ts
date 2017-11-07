import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import components
import { LeningAanvragenComponent } from './lening-aanvragen/lening.aanvragen.component';
import { ProductUitlenenComponent } from './product-uitlenen/product-uitlenen.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductTerugnemenComponent } from './product-terugnemen/product-terugnemen.component';
import { BeschikbarehardwareComponent } from './beschikbarehardware/beschikbarehardware.component';

//url routes
const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'leningaanvragen/:id',
    component: LeningAanvragenComponent
  },
  {
    path: 'productuitlenen',
    component: ProductUitlenenComponent
  },
  {
    path: 'productterugnemen',
    component: ProductTerugnemenComponent
  },
  {
    path: 'beschikbarehardware',
    component: BeschikbarehardwareComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
