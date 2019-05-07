import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pratice';

  menuTitleBar = "i am coming from your app component";
  showEventValue:string;

  primaryMenu = [
    {
      name:"Home",
      url:"google.com",
      schoolStatus: "Private"
    },{
      name:"About Us",
      url:"google.com",
      schoolStatus: "International"
    },{
      name:"Contact Us",
      url:"google.com",
      schoolStatus: "Goverment"
    }
  ]

  schoolInfo(event){
  this.showEventValue = event;
  }
 
}
