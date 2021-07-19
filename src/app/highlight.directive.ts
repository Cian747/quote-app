import { Directive,ElementRef,HostListener } from '@angular/core';
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef){}

  @HostListener("mouseenter") onMouseEnter(){
    this.clickUp("burlywood")
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.clickUp("")
  }

  private clickUp(action:string){
    this.elem.nativeElement.style.backgroundColor=action;
  }

}
