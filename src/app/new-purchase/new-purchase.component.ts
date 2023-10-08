import { Component, Input, OnInit } from '@angular/core';
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
import { Product } from '../model/product';
import { Category } from '../model/category';
import { CategoryService } from '../services/category.service';
import { PaymentMethod } from '../model/payment-method';
import { AutocompletePurchase } from '../model/autocomplete-purchase';

@Component({
  selector: 'app-new-purchase',
  templateUrl: './new-purchase.component.html',
  styleUrls: ['./new-purchase.component.css']
})
export class NewPurchaseComponent implements OnInit{

  purchase: any;
  item: any;
  displayedColumns: string[] = ['product', 'price', 'qtd', 'unit', 'valuePaid'];
  autocompletePurchase: AutocompletePurchase = this.getNewAutocompletePurchase()
  dataSource = new MatTableDataSource<Item>();
  constructor(private storeService: StoreService, 
    private paymentMethodService: PaymentMethodService,
    private productService: ProductService,
    private purchaseService: PurchaseService,
    private categoryService: CategoryService,
    private loadComponent: LoadComponent,
    private snackBarComponent: SnackBarComponent) {
    this.initObjects()

  }

  private initObjects(){
    this.initPurchase()
    this.initItem()
    this.autocompletePurchase = this.getNewAutocompletePurchase()
  }

  getNewAutocompletePurchase(): AutocompletePurchase {
    return {categoryOtions: [], storeOtions: [], paymentMethodOtions: [],
      productOtions: [], selectedCategory: {id: 0, name: ""}, selectedStore: {id: 0, name: ""},
      selectedPaymentMethod: {id: 0, method: "",}, selectedProduct: {id:0, name:"", description:"", unit:""}
    }
  }

  private initPurchase(){
    this.purchase = {
      store:{id: 0, name: ""}, item:[], paymentMethod:{id: 0, method: "",}, category:{id: null, name: ""}, total:0
    }
    this.autocompletePurchase.selectedCategory = {id: 0, name: ""}
  }

  private initItem() {
    this.item = {
      price:"", product:{id:0, name:"", description:"", unit:""}, qtd:0, valuePaid:""
    }
  }

  public onChangeProduct(newValue: any) {
    const selectedProduct = this.autocompletePurchase.productOtions.filter((product) => product.name === newValue)
    if(selectedProduct.length == 0){
      this.productService.getProductByNameStartsWith(newValue).subscribe((response: Product[]) => {
        if(response != null) {
          this.autocompletePurchase.productOtions = response
        }else {
          this.autocompletePurchase.productOtions = []
          this.purchase.product.name = newValue
        }
      });
    } else {
      //this.purchase.product = selectedProduct[0]
      this.item.product = selectedProduct[0]
    }
  } 

  public onChangePaymentMethod(newValue: any) {
    const selectedPaymentMethod = this.autocompletePurchase.paymentMethodOtions.filter((payment) => payment.method === newValue)
    if(selectedPaymentMethod.length == 0){
      this.paymentMethodService.getPaymentMethodByMethodNameStartsWith(newValue).subscribe((response: PaymentMethod[]) => {
        if(response != null) {
          this.autocompletePurchase.paymentMethodOtions = response
        }else {
          this.autocompletePurchase.paymentMethodOtions = []
          this.purchase.paymentMethod.method = newValue
        }
      });
    } else {
      this.purchase.paymentMethod = selectedPaymentMethod[0]
    }
  } 

  public onChangeStore(newValue: any) {
    const selectedStore = this.autocompletePurchase.storeOtions.filter((store) => store.name === newValue)
    if(selectedStore.length == 0){
      this.storeService.getStoreByNameStartsWith(newValue).subscribe((response: Store[]) => {
        if(response != null) {
          this.autocompletePurchase.storeOtions = response
        }else {
          this.autocompletePurchase.storeOtions = []
          this.purchase.store.name = newValue
        }
      });
    } else {
      this.autocompletePurchase.selectedStore = selectedStore[0]
    }
  } 

  public onChangeCategory(newValue: any) {
    const selectedCategory = this.autocompletePurchase.categoryOtions.filter((cat) => cat.name === newValue)
    if(selectedCategory.length == 0){
      this.categoryService.getCategoryByNameStartsWith(newValue).subscribe((response: Category[]) => {
        if(response != null) {
          this.autocompletePurchase.categoryOtions = response
        }else{
          this.autocompletePurchase.categoryOtions = []
          this.purchase.category.name = newValue
        }
      });
    }else{
      this.autocompletePurchase.selectedCategory = selectedCategory[0]
    }
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
    this.purchase.category = this.autocompletePurchase.selectedCategory
    this.purchase.paymentMethod = this.autocompletePurchase.selectedPaymentMethod
    this.purchase.store = this.autocompletePurchase.selectedStore
    this.purchaseService.newPurchase(this.purchase).subscribe(success => {
      console.log(success)
      this.loadComponent.closeDialog()
      this.dataSource.data = []
      this.initObjects()
      this.snackBarComponent.openSnackBar("Item registrado com sucesso")
    })
  }

  public isItemIncomplete(): boolean{
    return this.autocompletePurchase.selectedStore['name'] == '' 
    || this.autocompletePurchase.selectedPaymentMethod['method'] == ''
    || this.autocompletePurchase.selectedStore.name == '' ||
    this.item['price'] == '' || this.item['qtd'] == 0 || this.item['valuePaid'] == '' ||
    this.item['product']['name'] == '' || this.item['product']['unit'] == ''
  }

  public isPurchaseEmpty(): boolean{
    return this.dataSource.data.length < 1
  }

  ngOnInit() {}

}