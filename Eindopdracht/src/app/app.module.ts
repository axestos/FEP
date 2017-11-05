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
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { routing } from './app.routing';
import { ProductUitlenenComponent } from './product-uitlenen/product-uitlenen.component';
import {UitleenService} from './product-uitlenen/uitleen.service';
import {ProductinfoService} from './productinfo/productinfo.service';
import { ProductTerugnemenComponent } from './product-terugnemen/product-terugnemen.component';
<<<<<<< Updated upstream
import { BeschikbarehardwareComponent } from './beschikbarehardware/beschikbarehardware.component';
=======
import { DashboardComponent } from './dashboard/dashboard.component';
>>>>>>> Stashed changes

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
    ProductinfoComponent,
    ProductUitlenenComponent,
    ProductTerugnemenComponent,
<<<<<<< Updated upstream
    BeschikbarehardwareComponent
=======
    DashboardComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    routing
  ],
  providers: [AuthService,
              UitleenService, ProductinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
