import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})


export class HighlightDirective {

  @HostListener('mouseenter') onmouseenter() {
    this.element.nativeElement.style.backgroundColor ='red'
  }

  @HostListener('mouseleave') onmouseleave() {
    this.element.nativeElement.style.backgroundColor =''
  }

  constructor(
    private element: ElementRef
  ) {
   // this.element.nativeElement.style.backgroundColor = 'red';
   }

}
