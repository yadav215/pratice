import { Component, Input, Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  


  constructor() {}


  @Input("rightMenu") appMenu;
  storeMenu:any;


  @Output() changeDeta = new EventEmitter();

  detaSet(val){
    console.log(val);
    this.changeDeta.emit(val.target.outerText);

  }

  ngOnInit() {

    this.storeMenu =  this.appMenu;
    
  }

}
