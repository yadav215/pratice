import { Component, Input, Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  @Input("rightMenu") appMenu;
  storeMenu:any;



  infoTitle:string = "i am coming from child";
  @Output() childToParentMove = new EventEmitter();

  showDetaToParent(event){
    this.childToParentMove.emit(this.infoTitle);
  }

  constructor() {}

  ngOnInit() {

    this.storeMenu =  this.appMenu;
    
  }

}
