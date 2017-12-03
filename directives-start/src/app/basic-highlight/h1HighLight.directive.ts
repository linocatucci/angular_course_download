import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive({
  selector: '[appH1Highlight]'
})
export class h1HighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'grey';
  }
}

