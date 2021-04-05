import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-book-lists-fetch',
  templateUrl: './book-lists-fetch.component.html',
  styleUrls: ['./book-lists-fetch.component.css']
})
export class BookListsFetchComponent implements OnInit {
 
  @Input() book:any;
  @Input() sr:any;
 

  constructor() { }

  ngOnInit(): void {
    
  }

  

}
