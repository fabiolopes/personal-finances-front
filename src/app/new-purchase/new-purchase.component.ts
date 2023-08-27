import { Component, Input, OnInit } from '@angular/core';
import { Purchase } from '../model/purchase';
import { StoreService } from '../services/store.service';
import { PaymentMethodService } from '../services/payment-method.service';
import { ProductService } from '../services/product.service';
import { PurchaseService } from '../services/purchase.service';
import {MatTableDataSource} from "@angular/material/table";


@Component({
  selector: 'app-new-purchase',
  templateUrl: './new-purchase.component.html',
  styleUrls: ['./new-purchase.component.css']
})
export class NewPurchaseComponent implements OnInit{

  purchase: any;
  displayedColumns: string[] = ['store', 'preco', 'product', 'unit', 'qtd', 'valorPago','paymentMethod'];
  dataSource = new MatTableDataSource<Purchase>();
  constructor(private storeService: StoreService, 
    private paymentMethodService: PaymentMethodService,
    private productService: ProductService,
    private purchaseService: PurchaseService) {
    this.initPurchase()

  }

  private initPurchase(){
    this.purchase = {
      store:{id: 0, name: ""}, preco:"", product:{id:0, name:"", description:"", unit:""}, qtd:0, valorPago:"", paymentMethod:{id: 0, method: ""}
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

  public newPurchase() {
    const data = this.dataSource.data
    data.push(this.purchase)
    this.dataSource.data = data
    this.initPurchase() 
    //this.purchaseService.newPurchase(this.purchase);
  }

  ngOnInit() {}

}