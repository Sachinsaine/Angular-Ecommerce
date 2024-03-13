import { Component } from '@angular/core';
import { MaybellineService } from '../../maygelline-service.service';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrl: './card-carousel.component.css',
})
export class CardCarouselComponent {
  products: any[] = [];

  responsiveOptions: any[] | undefined;

  constructor(
    private productService: MaybellineService // private dialoge: MatDialog
  ) {}

  // handlePopUp(id: any) {
  //   // this.dialoge.open(PopUpComponent);
  //   this.productService.newArrivals
  //   this.productService.refresh();
  // }

  ngOnInit() {
    this.products = this.productService.newArrivals;
    console.log(this.products);

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
