import { Directive,
    ElementRef
   } from '@angular/core';
  
  @Directive({
    selector: '[EncabezadoEstandar]'
  })
  export class EncabezadoEstandarDirective {
  
    constructor(private elementRef: ElementRef) {
      this.elementRef.nativeElement, 'font-size', '20px';
    }
  }