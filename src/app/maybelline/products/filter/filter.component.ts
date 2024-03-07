import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  @Input()
  all: number = 0;

  @Input()
  inStock: number = 0;

  @Input()
  outOfStock: number = 0;

  @Output()
  handleChangeRadioBtn: EventEmitter<string> = new EventEmitter<string>();
  radioBtnSelected: string = 'all';

  handleRadioBtnChange() {
    console.log(this.radioBtnSelected);
    this.handleChangeRadioBtn.emit(this.radioBtnSelected);
  }
}
