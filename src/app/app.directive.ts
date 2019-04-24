import { Directive, Input, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class AppDirective {
  @Input('tooltip') tooltipTitle: string;
  tooltip: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

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

    this.tooltip = this.renderer.createElement('span');

    this.renderer.appendChild(
      this.tooltip,
      this.renderer.createText(this.tooltipTitle)
    );

    this.renderer.appendChild(document.body, this.tooltip);

    this.renderer.addClass(this.tooltip, 'ng-tooltip');
  }

  hide() {
    console.log("hide");
    this.renderer.removeChild(document.body, this.tooltip);
    this.tooltip = null;
  }

}