import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-projects';
  searchStr: string = '';
  handleSearchUtil(data: string) {
    console.log(data);
  }
}
