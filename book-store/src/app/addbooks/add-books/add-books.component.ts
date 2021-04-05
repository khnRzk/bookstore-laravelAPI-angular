import { Component, OnInit } from '@angular/core'; 
import { Adbook } from '../../adbook';
import { DataService } from 'src/app/service/data.service';



@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {
  insertBook = new Adbook();
  constructor(private dataservice:DataService) { }
  user_id:any = localStorage.getItem('User');
  
  
  ngOnInit(): void {
   
  }

  addBook() {
    this.insertBook.user_id = this.user_id;
  
    this.dataservice.addBooks(this.insertBook).subscribe(res=>{
 
     })
  }

}
