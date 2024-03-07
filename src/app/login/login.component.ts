import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  // private router = inject(Router);
  constructor(private router: Router) {}
  getUsersData!: FormGroup;
  ngOnInit(): void {
    this.getUsersData = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(16),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  handleUserData() {
    let getData = this.getUsersData.value;
    sessionStorage.setItem('userData', JSON.stringify(getData));
    // console.log(getData);
  }
  handleLogin() {
    this.router.navigate(['maybelline/allProducts']);
  }
}
