import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Site404Component } from './site404/site404.component';
import { WycieczkiComponent } from './wycieczki/wycieczki.component';
import { WycieczkaPodgladComponent } from './wycieczka-podglad/wycieczka-podglad.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
// import { AuthGuard } from './shared/guard/auth.guard';
import { SecureInnerPageGuard } from './shared/guard/secure-inner-page.guard';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'home', component: HomeComponent, canActivate: [SecureInnerPageGuard] },
  { path: 'trips', component: WycieczkiComponent, canActivate: [SecureInnerPageGuard] },
  { path: 'trips/:id', component: WycieczkaPodgladComponent, canActivate: [SecureInnerPageGuard] }, 
  { path: '**', component:  Site404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
