import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getFact(no: string){
    return this.http.get(`http://numbersapi.com/${no}/`,  {responseType: 'text'});
  }

  postData(fact){
   return this.http.post('http://localhost:5000/add', {fact: fact});

  }

  getAllFacts() {
    return this.http.get(`http://localhost:5000/getData`);
  }
}
