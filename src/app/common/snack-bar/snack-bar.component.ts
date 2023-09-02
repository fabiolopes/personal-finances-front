import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent {

constructor(private snackBar: MatSnackBar){}

durationInSeconds = 3;

  openSnackBar(data: string) {
    this.snackBar.open(data, "", {
      duration: this.durationInSeconds * 1000
    });
  }
}
