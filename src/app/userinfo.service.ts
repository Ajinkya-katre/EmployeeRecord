import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

  constructor(private http:HttpClient) {

   }

   getData(){
    let url="https://jsonplaceholder.typicode.com/todos/";
    
   }


}
