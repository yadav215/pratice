import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pratice';

  menuTitleBar = "i am coming from your app component";

  primaryMenu = [
    {
      name:"Home",
      url:"google.com"
    },{
      name:"About Us",
      url:"google.com"
    },{
      name:"Contact Us",
      url:"google.com"
    }
  ]

 
}
