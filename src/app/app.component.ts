import { Component,OnInit } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { AdminService } from './admin.service';
import { UserinfoService } from './userinfo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'searchApp';
    userinfodata:any=[]
    constructor(private user:UserinfoService){
        this.user.getData().subscribe(
          userdata =>{
            // console.log(userdata)
            this.userinfodata = userdata
          }
        )
    }

}
