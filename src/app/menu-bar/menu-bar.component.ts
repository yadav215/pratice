import { Component, Input, Output,EventEmitter, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit {

constructor() {}

  @Input("rightMenu") appMenu;
  storeMenu:any;


  @Output() changeDeta = new EventEmitter();

  detaSet(val){
    console.log("i am child",val);
    this.changeDeta.emit(val);

  }


  



  // chat box code
  @Output() chatmethod = new EventEmitter();
  @Output() genderShow = new EventEmitter;
  
  getGenderValue(event){
    this.genderShow.emit(event.target.value);
    console.log(event.target.value);
  }

  storeChat:any = [];

  getChatValue(event){
    
    this.storeChat.push(event);

    this.chatmethod.emit(this.storeChat);

    console.log(this.storeChat);

    //document.getElementById('text').value = "";
  }


  
 
  
 ngOnInit() {
    this.storeMenu =  this.appMenu;
  }
}
