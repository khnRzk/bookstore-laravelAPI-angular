import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/register'
import { DataService } from 'src/app/service/data.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register = new Register();
  success:any;
  alert:boolean = false;

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  } 

  addUser() {
    this._auth.registerUser(this.register).subscribe(res=>{
      localStorage.setItem('Token',res.token);
      this.success = res.status;
      if(this.success == 200){
        this.alert = true;
      }
    })
  }

}
