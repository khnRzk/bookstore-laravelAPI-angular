import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../app/dashboard/dashboard/dashboard.component';
import { AddBooksComponent } from '../app/addbooks/add-books/add-books.component';
import { LoginComponent } from '../app/login/login/login.component';
import { RegisterComponent } from '../app/register/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { AdminauthGuard } from './adminauth.guard';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate:[AdminauthGuard]},
  { path: 'add', component: AddBooksComponent, canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
