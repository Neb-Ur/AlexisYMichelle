import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent  implements OnInit, OnDestroy {

  images = [
    '/assets/img/1.jpeg',
    '/assets/img/2.jpeg',
    '/assets/img/3.jpeg',
    '/assets/img/4.jpeg',
    '/assets/img/5.jpeg'
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startCarousel();
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 1500); // Cambiar imagen cada 1 segundo
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Limpia el intervalo cuando el componente se destruye
    }
  }
}