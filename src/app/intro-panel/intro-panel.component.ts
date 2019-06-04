import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-intro-panel',
  templateUrl: './intro-panel.component.html',
  styleUrls: ['./intro-panel.component.scss']
})
export class IntroPanelComponent implements OnInit {

  constructor() { }

  rowStatus:string;
  @Output() showProductKeyInfo = new EventEmitter();
  @Output() showProductKeyInfoStock = new EventEmitter();

 productInfo:any = [
   {
     id: 1,
     title: 'Screw Driver',
     price: 400,
     stock: 11,
     color:"btn-primary",
     rowStatus:"default"
   },{
    id: 1,
    title: 'Nut Volt',
    price: 200,
    stock: 5,
    color:"btn-primary",
    rowStatus:"default"
  },{
    id: 3,
    title: 'Resistor',
    price: 78,
    stock: 45,
    color:"btn-primary",
    rowStatus:"default"
  },{
    id: 4,
    title: 'Tractor',
    price: 20000,
    stock: 1,
    color:"btn-primary",
    rowStatus:"default"
  },{
    id: 5,
    title: 'Roller',
    price: 62,
    stock: 15,
    color:"btn-primary",
    rowStatus:"default"
  }
 ]



  

  ngOnInit() {
  }

  ngOnChanges() {
  
  }

  stockVlaue(index,val){

    if (this.productInfo[index].stock > 10) {
      this.productInfo[index].color ="green";

      this.productInfo[index].stock = val;

      this.productInfo[index].rowStatus = "good_condition";

      this.showProductKeyInfo.emit(this.productInfo[index].title);
      this.showProductKeyInfoStock.emit(this.productInfo[index].stock);

     
  } else  {
    this.productInfo[index].color ="red";
    this.productInfo[index].stock = val;

    this.productInfo[index].rowStatus = "bad_condition";
    
    this.showProductKeyInfo.emit(this.productInfo[index].title);
    this.showProductKeyInfoStock.emit(this.productInfo[index].stock);

    console.log(val , this.productInfo[index].stock);
  }
}

}
