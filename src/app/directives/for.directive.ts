import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbers: number[];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }

  ngOnInit() {
    //*myFor="let n em [1, 2, 3]"
    for (let number in this.numbers) {
      this.container.createEmbeddedView(this.template, { $implicit: number });
    }
  }

}
