import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {path:'',component:NavbarComponent},
  {path:'tabledata',component:TablesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
