import { Component, Input } from '@angular/core';
import { MaybellineService } from '../../../maygelline-service.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../../pop-up/pop-up.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  constructor(
    private mservice: MaybellineService,
    private dialoge: MatDialog
  ) {}
  @Input() //: any[] = [];
  products: {
    id: number;
    name: string;
    price: number;
    product_link: string;
    image_link: string;
    in_stock: string;
    description: string;
    product_type: string;
  };

  displayPopUp: any[] = [];
  handlePopUp(item: any) {
    this.mservice.openPopUp(item);
    this.dialoge.open(PopUpComponent);
    this.mservice.refresh();
  }

  handleAddToCart(itemData: any) {
    this.mservice.getAddedItem(itemData);
  }
}
