import { Component } from '@angular/core';
import { MaybellineService } from '../../maygelline-service.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  getCarouselData: any[] = [];
  constructor(private mservice: MaybellineService) {
    this.getCarouselData = this.mservice.carouselData;
  }
}
