import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NewPurchaseComponent } from './new-purchase/new-purchase.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HomeComponent } from './home/home.component';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreService } from './services/store.service';
import { ApiConstants } from 'src/assets/constants/api.constants';
import { MatTableModule } from '@angular/material/table';
import { LoadComponent } from './common/load/load.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';




@NgModule({
  declarations: [
    AppComponent,
    NewPurchaseComponent,
    HomeComponent,
    LoadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    CurrencyMaskModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  providers: [
    StoreService,
    ApiConstants,
    LoadComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
