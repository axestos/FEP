import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { LeningAanvragenComponent } from './lening-aanvragen/lening.aanvragen.component';
import { routing } from './app.routing';
import { ProductUitlenenComponent } from './product-uitlenen/product-uitlenen.component';
import { ProductTerugnemenComponent } from './product-terugnemen/product-terugnemen.component';
import { BeschikbarehardwareComponent } from './beschikbarehardware/beschikbarehardware.component';
import { FormBuilder, FormGroup } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms'
import { AngularFireDatabase, } from
'angularfire2/database-deprecated';
import { ProductService } from './_services/product.service'
import { LeningService } from './_services/lening.service'


const firebaseConfig = {
  apiKey: "AIzaSyAfWuTAVavRZTEnYczfxiIzLRVVAG40HD0",
  authDomain: "fep-project-31319.firebaseapp.com",
  databaseURL: "https://fep-project-31319.firebaseio.com",
  projectId: "fep-project-31319",
  storageBucket: "fep-project-31319.appspot.com",
  messagingSenderId: "91699660492"
 };


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    LeningAanvragenComponent,
    ProductUitlenenComponent,
    ProductTerugnemenComponent,
    BeschikbarehardwareComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [AuthService,
              FormBuilder,
              AngularFireDatabase,
              ProductService,
              LeningService],
  bootstrap: [AppComponent]
})
export class AppModule {



}
