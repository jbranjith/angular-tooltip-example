import { Directive, Input, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class AppDirective {
  @Input('tooltip') tooltipTitle: string;
  tooltip: HTMLElement;

  constructor(
    private el: ElementRef
  ) { }

  @HostListener('mouseover')
  onMouseIn() {
    if (!this.tooltip) this.show();

  }

  @HostListener('mouseleave')
  onMouseOut() {
    if (this.tooltip) this.hide();
  }

  show() {
    console.log("show");
    //this.el.nativeElement.styl
  }

  hide() {
    console.log("hide")
  }
}