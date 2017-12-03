import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
  }

  @Input()
  set appUnless(condition: boolean) {
    if (!condition) {
      // display something if the condition is not true
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      // display nothing if the condition is true
      this.vcRef.clear();
    }
  }

}
