import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pratice';
  titleChange:string = "site status show here";

  gender:string;

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
    console.log("i am coming from app",parameters);
    this.titleChange = parameters;
  }


  ShowChatMgs:any;
  capture(event){
    this.ShowChatMgs = event;
    console.log("parenttttttttt", event)

  }

  clearChat(){
    this.ShowChatMgs.length = 0;
    console.log(this.ShowChatMgs);
  }

  genderIcon(event){
    console.log(event);
    this.gender = event;
  }

  productStatusName:string;
  productStatusValue:any;
  stockChecking:string;
  
  statusProductName(event){
    this.productStatusName = event;
  }
  
  statusProductStock(event){
    this.productStatusValue = event;

    if(event > 9){
      this.stockChecking = "good";
    }
    else{
      this.stockChecking = "bad";
    }
  }
}
