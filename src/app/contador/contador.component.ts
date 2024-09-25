import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {
  // Variables para los días, horas, minutos y segundos
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  // Fecha objetivo del evento
  targetDate: Date = new Date("2024-11-24T16:00:00");

  constructor() {}

  ngOnInit(): void {
    // Usamos un observable que emite cada segundo
    interval(1000).subscribe(() => {
      this.updateCountdown();
    });
  }

  updateCountdown(): void {
    const now = new Date().getTime();
    const timeDifference = this.targetDate.getTime() - now;

    // Calcula los días, horas, minutos y segundos
    this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Si la cuenta atrás ha terminado
    if (timeDifference < 0) {
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    }
  }
}