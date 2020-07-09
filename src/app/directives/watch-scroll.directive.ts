import {Directive, HostListener, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[appWatchScroll]'
})
export class WatchScrollDirective {
  @Output() scrolled = new EventEmitter();

  @HostListener('scroll', ['$event']) scroll(e) {
    // console.log(e.target.scrollTop);

    this.scrolled.emit(e);
  }
  constructor() { }
}
