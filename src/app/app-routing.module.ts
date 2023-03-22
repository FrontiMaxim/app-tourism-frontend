import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientPageComponent } from './client/pages/client-page/client-page.component';
import { PageHotelComponent } from './hotel/pages/page-hotel/page-hotel.component';
import { PagePermitComponent } from './permit/pages/page-permit/page-permit.component';
import { PageDiscountComponent } from './discount/pages/page-discount/page-discount.component';
import { PageContractComponent } from './contract/pages/page-contract/page-contract.component';

const routes: Routes = [
  { path: '', component: PageContractComponent},
  { path: 'clients', component: ClientPageComponent},
  { path: 'hotels', component: PageHotelComponent},
  { path: 'permits', component: PagePermitComponent},
  { path: 'discounts', component: PageDiscountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
