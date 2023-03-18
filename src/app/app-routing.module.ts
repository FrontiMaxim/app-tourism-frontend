import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContarctComponent } from './components/contarct/contarct.component';
import { ClientPageComponent } from './client/pages/client-page/client-page.component';
import { PageHotelComponent } from './hotel/pages/page-hotel/page-hotel.component';
import { PagePermitComponent } from './permit/pages/page-permit/page-permit.component';

const routes: Routes = [
  { path: '', component: ContarctComponent},
  { path: 'contracts', component: ContarctComponent},
  { path: 'clients', component: ClientPageComponent},
  { path: 'hotels', component: PageHotelComponent},
  { path: 'permits', component: PagePermitComponent},
  { path: 'discounts', component: ContarctComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
