import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from './register';
import { Login } from './login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  stat:boolean = true;

  constructor(private http:HttpClient , private _router: Router) { }

  
  registerUser(data: Register){
    return this.http.post<any>('http://127.0.0.1:8000/api/register', data);
  }

  loginUser(data: Login) {
    return this.http.post<any>('http://127.0.0.1:8000/api/login', data);
  }

  loggedIn() {
    if(localStorage.getItem('Token') && localStorage.getItem('Role') == '0'){
      return true;
    } else {
      return false;
    };
  }

  adminLogin() {
    if(localStorage.getItem('Token') && localStorage.getItem('Role') == '2'){
      return true;
    } else {
      return false;
    };
  }

  logoutUser() {
    localStorage.removeItem('Token');
    localStorage.removeItem('Role');
    localStorage.removeItem('User');
    this._router.navigate(['']);

  }
}
