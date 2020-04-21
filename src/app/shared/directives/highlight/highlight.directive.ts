import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) { }
  @Input('appHighlight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.hightlight(this.highlightColor || 'yellow')
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.hightlight(null);
  }

  private hightlight (color: string): void {
    this.element.nativeElement.style.backgroundColor = color;
  }

}
