import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//selector and all are decorators
//selector = name of the component
//templateURL = jab render hoga toh kaunsa NTML render hoga
//styleURL = css file kaunsii render hogi


//HOW VARIABLES ARE BINDED
export class AppComponent {
  title: string = 'app';
  name: string = 'anchal';
  menuItmes :any[]= [
    {
      item: "HOME"
    },
    {
      item: "Contact"
    },
    {
      item: "ABOUT US"
    },
    {
      item: "WHAT WE DO"
    }
  ];
  a=1
  changeItem(){

   if(this.a==1)
   {
     this.menuItmes[0].item ="NO HOME";
      this.a=0;
   }
   else{
     this.menuItmes[0].item ="HOME";
      this.a=1;
   }
  }
  menuItmes1 :string[]= [
    "Home",
    "Contact",
    "About US",
    "WHat we DO"
  ]
}
