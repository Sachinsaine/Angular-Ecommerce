import { Component } from '@angular/core';
import { MaybellineService } from '../../maygelline-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  constmetics: any;
  totalNoOfProducts: any;
  inStockProd: any;
  outOfStockProd: any;

  constructor(private mservice: MaybellineService) {
    this.constmetics = this.mservice.cosmeticProducts; //static products.
    // this.mservice.handleGetProducts().subscribe((product) => {
    //   // this.constmetics = product;
    // });
    this.totalNoOfProducts = this.mservice.cosmeticProducts.length; //total no. of products.
    this.inStockProd = this.mservice.inStockProuducts.length; //total no. of products In Stock.
    this.outOfStockProd = this.mservice.outOfStockProducts.length; //total no. of products  Out Of Stock.
  }

  radioBtnSelectedData: string = 'all';
  handleFilterChange(value: string) {
    this.radioBtnSelectedData = value;
  }

  filteredSearchText: any;
  searchTextChange(data: any) {
    this.filteredSearchText = data;
  }

  categoryChange(cate: any) {
    this.filteredSearchText = cate;
  }
}
