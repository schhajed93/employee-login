import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // { path: '', redirectTo: '/login'},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) 
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
