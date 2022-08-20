import { Component,  OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  employeeList: any[] = [];
  searchTerm: string = '';
  filteredResult: any[] = [];

  constructor(private _UserServiceService:UserServiceService) { }

  ngOnInit(): void {
    this.employeeList = this._UserServiceService.getEmployees()
  }

  filterEmployeeList() {
    if (this.searchTerm && this.searchTerm !== '') {
        let _term = this.searchTerm.toLowerCase();
        this.filteredResult = this.employeeList.filter(function (el: any) {
            return el.firstname.toLowerCase().indexOf(_term.toLowerCase()) > -1;
        });
    } else {
        this.filteredResult = [];
    }
  }

  selectEmplopyee(name:any) {
    this.searchTerm = name;
    this.filteredResult = [];
}


}
