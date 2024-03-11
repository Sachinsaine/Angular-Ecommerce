import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  isSignDivVisible: boolean = true;
  singUp: userInfoVal = new userInfoVal();
  login: Login = new Login();

  handleSignUp() {
    // debugger;
    const data = localStorage.getItem('userData');
    if (data != null) {
      const users = JSON.parse(data);
      users.push(this.singUp);
      localStorage.setItem('userData', JSON.stringify(users));
    } else {
      let arr = [];
      arr.push(this.singUp);
      localStorage.setItem('userData', JSON.stringify(arr));
    }
  }

  private router = inject(Router);

  handleSignUpForm(data: any) {
    console.log(data.value);
    this.router.navigate(['/']);
  }
  handleSignInForm(data: any) {
    console.log(data.value);
  }
}

export class userInfoVal {
  constructor() {
    (this.name = ''), (this.email = ''), (this.password = '');
  }
  name: string;
  email: string;
  password: string;
}
export class Login {
  constructor() {
    (this.email = ''), (this.password = '');
  }

  email: string;
  password: string;
}
