import { Component } from '@angular/core';
import { MaybellineService } from '../../maygelline-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ItemDeletePopupComponent } from '../item-delete-popup/item-delete-popup.component';

@Component({
  selector: 'app-your-cart',
  templateUrl: './your-cart.component.html',
  styleUrl: './your-cart.component.css',
})
export class YourCartComponent {
  myCart: any[] = [];
  totalAmount: any;
  handlePer: any;
  total: any;
  constructor(private mservice: MaybellineService, private dialoge: MatDialog) {
    this.mservice.countItems();
    this.myCart = this.mservice.addedItems;
    this.mservice.handleTotalAmount();
    this.totalAmount = this.mservice.totalAmount;
    this.mservice.handlePercentage();
    this.handlePer = this.mservice.getPercentage;
    this.total = this.totalAmount - this.handlePer;
  }

  handleDeleteItem(data: any) {
    // if (confirm('Are you sure you want to remove this item?')) {
    // } else {
    //   return false;
    // }

    this.dialoge.open(ItemDeletePopupComponent);
    this.mservice.handleDeleteConf(data);
    // const index = this.mservice.addedItems.indexOf(data);
    // return this.mservice.addedItems.splice(index, 1);
  }

  handleEmpty() {
    // this.mservice.addedItems.splice(0);
    this.myCart = this.mservice.addedItems = [];
    alert('Are you sure to delete all item from your cart!');
  }
}
