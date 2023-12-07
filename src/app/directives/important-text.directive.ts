import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appImportantText]',
  standalone: true
})
export class ImportantTextDirective {

  // This constructor is working
  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.background = "yellow";        // OK Working
    //this.el.nativeElement.style.backgroundColor = "yellow";   // OK Working too
  }

  // This constructor is working too
  /*constructor(private el: ElementRef, renderer: Renderer2) { 
    renderer.setStyle(el.nativeElement, 'background-color', 'yellow');
  }*/

  /*constructor(private el: ElementRef) {}
  ngOnInit() {
    let dom = el.nativeElement;
    dom.style.backgroundColor = 'yellow';  // Ok these groups are working too.
  }*/
}
