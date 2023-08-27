import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPurchaseComponent } from './new-purchase/new-purchase.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'nova-compra', component: NewPurchaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
