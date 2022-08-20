import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  employees:any[]=[
    {"id":10021, "firstname":"Ajinkya","lastname":"Katre",   "jobtitle":"software developer","salary":50000,"dataOfJoining":"18/8/2022"},
    {"id":10022, "firstname":"Manish", "lastname":"Raika",   "jobtitle":"developer",         "salary":40000,"dataOfJoining":"11/2/2022"},
    {"id":10023, "firstname":"Ganesh", "lastname":"Kale",    "jobtitle":"business analyst",  "salary":60000,"dataOfJoining":"12/3/2022"},
    {"id":10024, "firstname":"Nikhil", "lastname":"Dhavale", "jobtitle":"testing",           "salary":30000,"dataOfJoining":"14/4/2022"},
    {"id":10025, "firstname":"Nikhil", "lastname":"Gorde",   "jobtitle":"software engineer", "salary":20000,"dataOfJoining":"16/5/2022"},
    {"id":10026, "firstname":"Shubham","lastname":"Borate",  "jobtitle":"software developer","salary":50000,"dataOfJoining":"18/6/2022"},
    {"id":10027, "firstname":"Prakash","lastname":"Nagtilak","jobtitle":"developer",         "salary":40000,"dataOfJoining":"11/7/2022"},
    {"id":10028, "firstname":"Durgesh","lastname":"Naik",    "jobtitle":"business analyst",  "salary":60000,"dataOfJoining":"12/8/2022"},
    {"id":10029, "firstname":"Sumit",  "lastname":"Tambhe",  "jobtitle":"testing",           "salary":30000,"dataOfJoining":"14/9/2022"}
  ]

  getEmployees(){
    return this.employees;
  }

}






		

