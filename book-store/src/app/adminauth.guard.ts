import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminauthGuard implements CanActivate {
  constructor(private _router: Router,private _auth: AuthService, ) { 

  }
  canActivate() : boolean {
    if(this._auth. adminLogin()){
      return true; 
    } else {
      this._router.navigate(['/login'])
      return false;
    }
  }
  
}
