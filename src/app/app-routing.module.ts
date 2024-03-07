import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaybellineComponent } from './maybelline/maybelline.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
const routes: Routes = [
  { path: 'maybelline', component: MaybellineComponent },
  { path: '', redirectTo: 'maybelline/homepage', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  {
    path: 'signIn',
    component: SignInComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
