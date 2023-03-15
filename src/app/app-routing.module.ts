import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContarctComponent } from './components/contarct/contarct.component';
import { ClientPageComponent } from './client/pages/client-page/client-page.component';

const routes: Routes = [
  { path: '', component: ContarctComponent},
  { path: 'contracts', component: ContarctComponent},
  { path: 'clients', component: ClientPageComponent},
  { path: 'hotels', component: ContarctComponent},
  { path: 'permits', component: ContarctComponent},
  { path: 'discounts', component: ContarctComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
