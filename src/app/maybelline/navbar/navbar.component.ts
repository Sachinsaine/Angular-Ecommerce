import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { MaybellineService } from '../../maygelline-service.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  getCategories: any;
  searchText: string = '';

  constructor(private mservice: MaybellineService, public dialoge: MatDialog) {
    this.getCategories = this.mservice.categoriesList;
    //console.log(this.getCategories);
  }

  @Output() handleSearchTextChange = new EventEmitter<string>();

  // while entering the product name  in the search bar it will emit the event with that text to the parent component.
  // handleSearchText() {
  //   // this.handleSearchTextChange.emit(this.searchText);
  // }

  //after clicking the search icon , display the products which product name have you entered.

  @ViewChild('searchInput') searchInputElement: ElementRef;
  hanldeSearch() {
    this.searchText = this.searchInputElement.nativeElement.value;
    this.handleSearchTextChange.emit(this.searchText);
  }
  // displayLoginPopUp() {
  //   this.dialoge.open(LoginComponent);
  // }

  //no of items in cart
  getTotalNoOfItemsAdded() {
    return this.mservice.countItems();
  }
}
