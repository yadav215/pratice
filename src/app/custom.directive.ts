import { Directive, ElementRef, HostListener,Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit{

  @Input() defaultColorInput:string;
  @Input() hoverColorInput:string;
  public defaultColor: any;
  public hoverColor : any;

  ngOnInit(){
    this.defaultColor = this.defaultColorInput;
    this.hoverColor = this.hoverColorInput;
    this.el.nativeElement.style.backgroundColor = this.defaultColor;
  }

  constructor(private el:ElementRef) {
    
  }

  public highLightColor(color:string){
    this.el.nativeElement.style.backgroundColor = color;

  }

   @HostListener('mouseenter') onmouseenter(){
     this.highLightColor(this.hoverColor);
   }

   @HostListener('mouseleave') onmouseleave(){
    this.highLightColor(this.defaultColor);
  }

   

  

}
