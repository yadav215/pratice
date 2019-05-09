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
    this.schoolNumber = event.target.value;
  }
}
