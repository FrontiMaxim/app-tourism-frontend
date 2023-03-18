import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContarctComponent } from './components/contarct/contarct.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { AlertComponent } from './components/alert/alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardClientComponent } from './client/components/card-client/card-client.component';
import { FormClientComponent } from './client/components/form-client/form-client.component';
import { ClientPageComponent } from './client/pages/client-page/client-page.component';
import { FormHotelComponent } from './hotel/components/form-hotel/form-hotel.component';
import { PageHotelComponent } from './hotel/pages/page-hotel/page-hotel.component';
import { CardHotelComponent } from './hotel/components/card-hotel/card-hotel.component';
import { PagePermitComponent } from './permit/pages/page-permit/page-permit.component';
import { FormPermitComponent } from './permit/components/form-permit/form-permit.component';
import { CardPermitComponent } from './permit/components/card-permit/card-permit.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContarctComponent,
    ClientPageComponent,
    ModalWindowComponent,
    AlertComponent,
    FormClientComponent,
    CardClientComponent,
    CardHotelComponent,
    FormHotelComponent,
    PageHotelComponent,
    PagePermitComponent,
    FormPermitComponent,
    CardPermitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
