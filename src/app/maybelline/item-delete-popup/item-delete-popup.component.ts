import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MaybellineService } from '../../maygelline-service.service';

@Component({
  selector: 'app-item-delete-popup',
  templateUrl: './item-delete-popup.component.html',
  styleUrl: './item-delete-popup.component.scss',
})
export class ItemDeletePopupComponent {
  itemDeleted: any;
  constructor(
    private dialoge: MatDialogRef<ItemDeletePopupComponent>,
    private mservice: MaybellineService
  ) {}

  handleCancel() {
    this.dialoge.close();
  }
  handleRemove() {
    this.itemDeleted = this.mservice.itemDelete;
    this.mservice.addedItems.splice(this.itemDeleted, 1);
    this.dialoge.close();
  }
  handleCut() {
    this.dialoge.close();
  }
}
