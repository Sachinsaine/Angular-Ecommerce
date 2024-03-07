import { Component, EventEmitter, Output } from '@angular/core';
import { MaybellineService } from '../../maygelline-service.service';

@Component({
  selector: 'app-sub-navbar',
  templateUrl: './sub-navbar.component.html',
  styleUrl: './sub-navbar.component.css',
})
export class SubNavbarComponent {
  getCategories: any;
  constructor(private mservice: MaybellineService) {
    this.getCategories = this.mservice.subNavbarCategories;
  }

  @Output() handleCategories = new EventEmitter<string>();

  handleCategory(data: any) {
    this.handleCategories.emit(data);
  }
}
