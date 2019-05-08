import { Component, Input, Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  @Input() appMenu;
  storeMenu:any;

  constructor() {}

  ngOnInit() {

    this.storeMenu =  this.appMenu;
    
  }

}
