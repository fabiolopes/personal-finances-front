import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent {
  @Input() label: string = 'Label';
  @Input() selectedItem: string = '';
  @Input() options: any[] = [];
  @Output() selectedItemChange = new EventEmitter<string>();

  onValueChange(newValue: string) {
    this.selectedItemChange.emit(newValue);
  }
}
