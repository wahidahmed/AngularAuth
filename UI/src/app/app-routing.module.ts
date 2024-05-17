import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadComponent: () => import('./components/login/login.component').then(c => c.LoginComponent) }
  , { path: 'signup', loadComponent: () => import('./components/signup/signup.component').then(c => c.SignupComponent) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
