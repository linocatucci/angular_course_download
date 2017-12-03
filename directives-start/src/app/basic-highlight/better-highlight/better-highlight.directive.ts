import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = '#ff9cd0';

  @HostBinding('style.backgroundColor') backgroundColor: string; // initial color transparent to avoid an error

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', '#ff9cd0');
  }

  @HostListener('mouseenter')
  mouseover(evenData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', '#ff9cd0');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  mouseleave(evenData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'transparent');
    // this.backgroundColor = 'transparent'
    this.backgroundColor = this.defaultColor;
  }

}
