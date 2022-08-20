import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() {   }
  
  x = "have a nice day ahead"

  personalDetails(){
    return {
      
        name:'Ajinkya Katre',
        age:22
      
    }
  }

}
