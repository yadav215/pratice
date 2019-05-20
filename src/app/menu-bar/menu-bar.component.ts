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
  @Output() genderShow = new EventEmitter();

  //@Input() getgenderSex:any;
  sex: string;
  
  // getGenderValue(event){
  //   this.genderShow.emit(event.target.value);
  //   console.log(event.target.value);
  // }


  // storeGender:any = [];
  
  // getGenderValue(event){

  //   this.storeGender.push(event.target.value)
  //   this.genderShow.emit(this.storeGender);
  //   console.log(this.storeGender);
  // }

  storeChat:any = [];
  storeGender:any = [];


  

 



  getChatValue(event,genValue){
    console.log(this.sex);

  
   
    this.storeChat.push(event);
    this.storeGender.push(this.sex);

    this.chatmethod.emit(this.storeChat);
    this.genderShow.emit(this.storeGender);

    document.getElementById('text').value = "";

    //`console.log("hheloooo",this.getgenderSex);
  }

 ngOnInit() {
    this.storeMenu =  this.appMenu;
  }
}
