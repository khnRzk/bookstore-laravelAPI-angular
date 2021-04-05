import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Search } from '../../search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchme = new Search();
  result:any;
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
  }

  search() {
    this.dataservice.getResult(this.searchme.key).subscribe(res=>{
      this.result = res;
    })
  }

}
