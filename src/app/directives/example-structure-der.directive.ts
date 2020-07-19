import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appExampleStructureDer]'
})
export class ExampleStructureDerDirective {

  @Input() set inNot(condition: boolean) {
    if (!condition) {
      // Показать элементы
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      // Скрыть
      this.viewContainerRef.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

}
