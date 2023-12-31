import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NewPurchaseComponent } from './new-purchase/new-purchase.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreService } from './services/store.service';
import { ApiConstants } from 'src/assets/constants/api.constants';
import { MatTableModule } from '@angular/material/table';
import { LoadComponent } from './common/load/load.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarComponent } from './common/snack-bar/snack-bar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes }   from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PurchaseListComponent } from './purchase-list/purchase-list.component'
import { PurchaseListService } from './services/purchase-list.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AutocompleteComponent } from './common/autocomplete/autocomplete.component';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};

registerLocaleData(ptBr);


@NgModule({
  declarations: [
    AppComponent,
    NewPurchaseComponent,
    HomeComponent,
    LoadComponent,
    SnackBarComponent,
    PurchaseListComponent,
    AutocompleteComponent
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
    MatProgressSpinnerModule,
    CurrencyMaskModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    RouterModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatAutocompleteModule
  ],
  providers: [
    StoreService,
    PurchaseListService,
    ApiConstants,
    LoadComponent,
    SnackBarComponent,
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
