import {
  Directive,
  OnInit,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[app-ripple]',
})
export class RippleDirective implements OnInit {
  $el: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.$el = el.nativeElement;
    // this.$el.classList.add('ripple');
  }

  @HostListener('click', ['$event.target']) onClick(): void {
    // this.$el.style.border = 'solid 1px red';
    // this.$el.classList.add('ripple--active');
    this.renderer.addClass(this.$el, 'ripple--active');

    setTimeout(() => {
      this.renderer.removeClass(this.$el, 'ripple--active');
      // this.$el.classList.remove('ripple--active');
    }, 600);
  }

  ngOnInit() {
    this.renderer.addClass(this.$el, 'ripple');
  }
}
