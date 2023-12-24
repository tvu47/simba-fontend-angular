import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDirectFactory]'
})
export class DirectFactoryDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
