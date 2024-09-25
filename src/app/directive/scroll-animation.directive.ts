import { AfterViewInit, Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective  implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Agrega la clase para iniciar la animación
          this.renderer.addClass(this.el.nativeElement, 'animate-in');
        } else {
          // Elimina la clase si sale del viewport
          this.renderer.removeClass(this.el.nativeElement, 'animate-in');
        }
      });
    });

    observer.observe(this.el.nativeElement);
  }
}
