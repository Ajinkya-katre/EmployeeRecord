import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {

    example =''

  constructor(private x:AdminService) {
    // console.log(this.x.personalDetails().age)
    let d1 = this.x.personalDetails()
    this.example=d1.name
   }

  ngOnInit(): void {
  }

}
