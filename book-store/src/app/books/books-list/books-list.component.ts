import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books:any;
  load:boolean = true;
  src:any = [Math.floor(Math.random() * 31)];
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.dataservice.getData().subscribe(res =>{
      this.books = res;
      this.load = false;
    });
  }

}
