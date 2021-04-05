import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adbook } from '../adbook';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/books');
  }

  addBooks(data: Adbook) {
    return this.httpClient.post('http://127.0.0.1:8000/api/add-book', data);
  }

  getAuthor() {
    return this.httpClient.get('http://127.0.0.1:8000/api/author');
  }

  setStatus(data: any) {
    return this.httpClient.put('http://127.0.0.1:8000/api/status', data);
  }

  getResult(data:any) {
    return this.httpClient.get('http://127.0.0.1:8000/api/search?key='+data);
  }

}
