import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import { PurchaseListItem } from '../model/purchase-list-item';
import { PurchaseListService } from '../services/purchase-list.service';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent {

  displayedColumns: string[] = ['date', 'category', 'store', 'paymentMethod', 'total'];
  dataSource = new MatTableDataSource<PurchaseListItem>() 

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor(private purchaseListService: PurchaseListService){ 
    this.initPurchaseList()
   }
   

  public initPurchaseList() {
    this.purchaseListService.getPurchaseList().subscribe((response: PurchaseListItem[]) => {
      if(response != null) {
        this.dataSource.data = response
      }
    });
  }
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
 }
}
