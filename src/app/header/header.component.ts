import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  schoolNumber = '1.855.RIDEZUM';

  btnValue = "Hide School Value";

  schoolValue: boolean = true;
  

  changeVlave(){
    
    this.schoolValue = !this.schoolValue;

    if(!this.schoolValue) {
      this.btnValue = "Show School Value";
    }
    else{
      this.btnValue = "Hide School Value";
    }
  }

  dummySlogan = "slogan goes here";

  makeYourSlogan(event:Event){
    this.dummySlogan = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
  }

}
