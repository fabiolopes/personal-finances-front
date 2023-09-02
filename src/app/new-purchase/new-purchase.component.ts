import { Component, Input, OnInit } from '@angular/core';
import { Purchase } from '../model/purchase';
import { StoreService } from '../services/store.service';
import { PaymentMethodService } from '../services/payment-method.service';
import { ProductService } from '../services/product.service';
import { PurchaseService } from '../services/purchase.service';
import {MatTableDataSource} from "@angular/material/table";
import { Item } from '../model/item';
import {CurrencyPipe} from '@angular/common';
import { LoadComponent } from '../common/load/load.component';
import { SnackBarComponent } from '../common/snack-bar/snack-bar.component';
import { Store } from '../model/store';
import { PaymentMethod } from '../model/payment-method';
import { Product } from '../model/product';


@Component({
  selector: 'app-new-purchase',
  templateUrl: './new-purchase.component.html',
  styleUrls: ['./new-purchase.component.css']
})
export class NewPurchaseComponent implements OnInit{

  purchase: any;
  item: any;
  displayedColumns: string[] = ['product', 'price', 'qtd', 'unit', 'valuePaid'];
  dataSource = new MatTableDataSource<Item>();
  constructor(private storeService: StoreService, 
    private paymentMethodService: PaymentMethodService,
    private productService: ProductService,
    private purchaseService: PurchaseService,
    private loadComponent: LoadComponent,
    private snackBarComponent: SnackBarComponent) {
    this.initObjects()

  }

  private initObjects(){
    this.initPurchase()
    this.initItem()
  }

  private initPurchase(){
    this.purchase = {
      store:{id: 0, name: ""}, item:[], paymentMethod:{id: 0, method: "",}, total:0
    }
  }

  private initItem() {
    this.item = {
      price:"", product:{id:0, name:"", description:"", unit:""}, qtd:0, valuePaid:""
    }
  }

  public onChangeStore(newValue: any) {
    this.storeService.getStoreByName(newValue).subscribe((response: Store) => {
      if(response != null) {
        this.purchase.store = response
      }
    });
  } 

  public onChangePaymentMethod(newValue: any) {
    this.paymentMethodService.getPaymentMethodByMethodName(newValue).subscribe((response) => {
      if(response != null) {
        this.purchase.paymentMethod = response
      }
    });
  } 

  public onChangeProduct(newValue: any) {
    this.productService.getProductByName(newValue).subscribe((response: Product) => {
      if(response != null) {
        this.item.product = response
      }
    });
  } 

  public newItem() {
    const data = this.dataSource.data
    data.push(this.item)
    this.purchase.total += this.item.valuePaid
    this.dataSource.data = data
    this.initItem()
  }

  public newPurchase() {
    this.loadComponent.openDialog()
    this.purchase['items'] = this.dataSource.data
    this.purchaseService.newPurchase(this.purchase).subscribe(success => {
      console.log(success)
      this.loadComponent.closeDialog()
      this.dataSource.data = []
      this.initObjects()
      this.snackBarComponent.openSnackBar("Item registrado com sucesso")
    })
  }

  public isItemIncomplete(): boolean{
    return this.purchase['store']['name'] == '' || this.purchase['paymentMethod']['method'] == '' ||
    this.item['price'] == '' || this.item['qtd'] == 0 || this.item['valuePaid'] == '' ||
    this.item['product']['name'] == '' || this.item['product']['unit'] == ''
  }

  public isPurchaseEmpty(): boolean{
    return this.dataSource.data.length < 1
  }

  ngOnInit() {}

}