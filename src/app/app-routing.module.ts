import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPurchaseComponent } from './new-purchase/new-purchase.component';
import { HomeComponent } from './home/home.component';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'nova-compra', component: NewPurchaseComponent },
  { path: 'compras', component: PurchaseListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
