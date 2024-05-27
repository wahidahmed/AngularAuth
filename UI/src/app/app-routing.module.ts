import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: 'login', loadComponent: () => import('./components/login/login.component').then(c => c.LoginComponent) }
  , { path: 'signup', loadComponent: () => import('./components/signup/signup.component').then(c => c.SignupComponent) }
  ,{path:'test',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
