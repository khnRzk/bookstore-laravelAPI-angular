import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/login'
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginUserData = new Login();
  role:any;
  userid:any; 

  constructor(private _router: Router,private _auth: AuthService, ) { }

  ngOnInit() {
    
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData).subscribe(res=>
          {
            localStorage.setItem('Token',res.token);
            localStorage.setItem('Role',res.role);
            localStorage.setItem('User',res.user);
            this._router.navigate(['/add'])
            this.role = res.role
            if(this.role == 2){
              this._router.navigate(['/dashboard'])
            } else if(this.role == 2){
              this._router.navigate(['/add'])
            }
              
          }
          
      )
  }
}
