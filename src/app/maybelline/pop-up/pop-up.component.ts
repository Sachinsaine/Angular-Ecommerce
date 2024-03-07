import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MaybellineService } from '../../maygelline-service.service';
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css',
})
export class PopUpComponent {
  itemDetails: any;
  constructor(
    public dialoge: MatDialogRef<PopUpComponent>,
    public mservice: MaybellineService
  ) {
    this.itemDetails = mservice.handlePopUpData;
  }

  closePopUp() {
    this.dialoge.close();
  }
}
