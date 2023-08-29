import { Component } from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent {
  dialogRef: any;
  constructor(public dialog: MatDialog) {}

  public openDialog() {
     this.dialogRef = this.dialog.open(LoadComponent, {
      disableClose: true
    });
  }

  public closeDialog() {
    this.dialogRef.close()
  }
}
