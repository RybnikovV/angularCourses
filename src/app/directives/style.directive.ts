import {Directive, ElementRef, HostListener, Renderer2, Input, HostBinding} from '@angular/core';

interface activeStyle {
  color?: string;
  backgroundColor?: string;
}

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('changeColorOnMouseEnter') changeStyle = true;
  blockStyle: activeStyle = {};

  @HostBinding('style.borderBottom') nameActiveClass;

  constructor(
    private el: ElementRef,
    private r: Renderer2
  ) {}

  takeRandomColor = () => {
    this.blockStyle.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.blockStyle.backgroundColor = 'rgba(' + Math.floor(Math.random() * 100) + ',' +  Math.floor(Math.random() * 100) + ',' + Math.floor(Math.random() * 100) + ',' + '0.9)';
  }

  @HostListener('mouseenter') onEnter() {
    if (this.changeStyle) {
      this.takeRandomColor();
      this.r.setStyle(this.el.nativeElement, 'color', this.blockStyle.color);
      this.r.setStyle(this.el.nativeElement, 'background-color', this.blockStyle.backgroundColor);
    }
    this.nameActiveClass = '1px solid #685DC8';
  }

  @HostListener('mouseleave') onLeave() {
    this.nameActiveClass = '';
  }

}
