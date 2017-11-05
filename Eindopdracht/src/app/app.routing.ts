import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'productinfo',
    component: ProductinfoComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
