import { Component, Input, Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  @Input() appMenu;

  @Input() appTitle;

  @Output() showSchoolStatus=new EventEmitter();
  schoolInfo = "i am ready to Zum Drive: Satus ok";

  setSchoolValue(){
    this.showSchoolStatus.emit(this.schoolInfo);
  }

  constructor() {}

  ngOnInit() {
    
  }

}
