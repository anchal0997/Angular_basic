import { Component, Input } from '@angular/core';

//Input is a decorator

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent  {

@Input ('menu') menu:any;
  name="";
  getData(name){
    this.name="GREET! " +name;

  }
}

//{{item}} STRING INTERPOLATION

