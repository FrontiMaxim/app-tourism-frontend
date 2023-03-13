import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from 'src/shared/list/list.component';
import { ListItemComponent } from 'src/shared/list-item/list-item.component';
import { ContarctComponent } from './components/contarct/contarct.component';
import { ClientModule } from './client/client.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ListComponent,
    ListItemComponent,
    ContarctComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    ClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
