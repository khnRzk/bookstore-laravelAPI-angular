import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  authors:any;
  user_id:any = localStorage.getItem('User');
  role_id:any;
  data:any;
  constructor(private dataservice:DataService) { }

  ngOnInit()  {
    this.getAuthors();
  }

  getAuthors() {
    this.dataservice.getAuthor().subscribe(res =>{
      this.authors = res;
    });
  }
  
  statusBtn(id: any){
    this.role_id =0;
    this.data = {'user_id':id, 'role_id': this.role_id};

    this.dataservice.setStatus(this.data).subscribe(res=>{
      this.getAuthors();
    })
  }

  statusBtnDeactive(id: any) {
    this.role_id =1;
    this.data = {'user_id':id, 'role_id': this.role_id};
    
    this.dataservice.setStatus(this.data).subscribe(res=>{
      this.getAuthors();
    }) 
  } 
}
