import { Component } from '@angular/core';
import { MaybellineService } from '../../maygelline-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  coroudelImg: any;
  getCosmeticsData: any = [];
  getNewArrivals: any = [];
  getTypesOfCate: any = [];
  constructor(private mservice: MaybellineService) {
    this.coroudelImg = this.mservice.carouselData;
    this.getNewArrivals = this.mservice.newArrivals;
    this.getTypesOfCate = this.mservice.typesOfCate;
  }
}
