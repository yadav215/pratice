import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pratice';
  titleChange:string = "site status show here";

  siteMenu = [
    {
      menuName:"Home",
      status: "ok"
    },{
      menuName:"About Us",
      status: "sucsess"
    },{
      menuName:"Contact Us",
      status: "warning"
    }
  ];

 

  contitionMatch:string;

  constructor(){

  }

  ngOnInit() {
  }

  showValue(parameters){
    //console.log("i am coming from app");

    this.titleChange = parameters;
    this.contitionMatch = parameters;

    if(this.titleChange == 'Home'){
      this.titleChange = "sucsess";
    }
    else if(this.titleChange == 'About Us'){
      this.titleChange = "Warning";
    }
    else if(this.titleChange == 'Contact Us'){
      this.titleChange = "Critical";
    }
  }
}
