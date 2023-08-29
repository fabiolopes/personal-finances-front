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
    private loadComponent: LoadComponent) {
    this.initObjects()

  }

  private initObjects(){
    this.initPurchase()
    this.initItem()
  }

  private initPurchase(){
    this.purchase = {
      store:{id: 0, name: ""}, item:[], paymentMethod:{id: 0, method: ""}
    }
  }

  private initItem() {
    this.item = {
      price:"", product:{id:0, name:"", description:"", unit:""}, qtd:0, valuePaid:""
    }
  }

  public onChangeStore(newValue: any) {
    this.storeService.getStoreByName(newValue).subscribe(response => {
      if(response != null) {
        this.purchase.store = response
      }
    });
  } 

  public onChangePaymentMethod(newValue: any) {
    this.paymentMethodService.getPaymentMethodByMethodName(newValue).subscribe(response => {
      if(response != null) {
        this.purchase.paymentMethod = response
      }
    });
  } 

  public onChangeProduct(newValue: any) {
    this.productService.getProductByName(newValue).subscribe(response => {
      if(response != null) {
        this.purchase.product = response
      }
    });
  } 

  public newItem() {
    this.loadComponent.openDialog()
    const data = this.dataSource.data
    data.push(this.item)
    this.dataSource.data = data
    this.initItem() 
    this.loadComponent.closeDialog()
  }

  public newPurchase() {
    this.purchase['items'] = this.dataSource.data
    this.purchaseService.newPurchase(this.purchase);
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