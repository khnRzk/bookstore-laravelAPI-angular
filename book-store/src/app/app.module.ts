import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { NavComponent } from './navbar/nav/nav.component';
import { BookListsFetchComponent } from './bookfetch/book-lists-fetch/book-lists-fetch.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AddBooksComponent } from './addbooks/add-books/add-books.component';
import { SearchComponent } from './search/search/search.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    NavComponent,
    BookListsFetchComponent,
    DashboardComponent,
    AddBooksComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
