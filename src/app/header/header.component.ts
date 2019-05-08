import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  schoolNumber:string;

  constructor() { }

  ngOnInit() {
  }

  commboBoxItems = [
    {
      items:"Private School",
      Status: "Status Ok"
    },{
      items:"International School",
      Status: "Status High"
    },{
      items:"Govt. School",
      Status: "Status warning"
    }
  ]

  getOutput(event){
    let showInnerText = event.target.value;
    //alert(showInnerText);

    if(showInnerText == "Private School"){
      this.schoolNumber = showInnerText;
    }
    else if(showInnerText == "International School"){
      this.schoolNumber = showInnerText;
    }
    else if(showInnerText == "Govt. School"){
      this.schoolNumber = showInnerText;
    }
    else{
      this.schoolNumber = "please select any option"
    }
    
  }

}
