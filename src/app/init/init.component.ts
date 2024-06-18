import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Clipboard } from '@angular/cdk/clipboard';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss'],
})
export class InitComponent implements OnInit {
  isPlaying: boolean = false;
  audio: HTMLAudioElement | undefined;
  title = 'matriBastiDani';
  fontGretaVibes = 'fontGretaVibes';

  /**TIMER */
  _second = 1000;
  _minute = this._second * 60;
  _hour = this._minute * 60;
  _day = this._hour * 24;
  end: any;
  now: any;
  day: any;
  hours: any;
  minutes: any;
  seconds: any;
  source = timer(0, 1000);
  clock: any;
  bankName: string = 'Banco Estado';
  accountNumber: string = '19291774';
  accountHolder: string = 'Ruben Benavides Silva';
  transferKey: string = 'Cuenta rut/vista';
  correo: string = 'rubenandres462@gmail.com';
  rut: string = '19291774-3';
  confirmationStatus: string = '';
  apiUrl =
    'https://script.google.com/macros/s/AKfycbyxqEEQ45qGWoGRY8s17zYkThUULPcIG5RcasNBi9aR32Z5zRXqk92GJVDKpkWI6Vjm/exec';

  constructor(private clipboard: Clipboard, private http: HttpClient) {}
  ngOnInit(): void {
    console.log('test');
    this.audio = new Audio('/assets/music/song.mp3');
    this.clock = this.source.subscribe((t) => {
      this.now = new Date();
      this.end = new Date('09/14/2024 18:00');
      this.showDate();
    });
  }

  showDate() {
    let distance = this.end - this.now;
    this.day = Math.floor(distance / this._day);
    this.hours = Math.floor((distance % this._day) / this._hour);
    this.minutes = Math.floor((distance % this._hour) / this._minute);
    this.seconds = Math.floor((distance % this._minute) / this._second);
  }
  togglePlayback(): void {
    this.isPlaying = !this.isPlaying;

    if (!this.audio) {
      return;
    }
    // Agrega aquí la lógica para reproducir o pausar la canción según el estado
    if (this.isPlaying) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }

  copyBankInfo() {
    const bankInfo = `Banco: ${this.bankName}\nNúmero de cuenta: ${this.accountNumber}\nTitular: ${this.accountHolder}\nCuenta corriente: ${this.transferKey}\nCorreo:${this.correo}\nRut:${this.rut}`;
    this.clipboard.copy(bankInfo);
  }

  confirm() {
    this.confirmationStatus = 'Gracias por confirmar. ¡Los esperamos!';
    this.add(true);
  }

  decline() {
    this.confirmationStatus = 'Lamentamos no contar con sus presencias :(';
    this.add(false);
  }

  async add(confirm: boolean) {
    const body = { id: 1, confirm };

    this.http
      .post(
        '/macros/s/AKfycbyxqEEQ45qGWoGRY8s17zYkThUULPcIG5RcasNBi9aR32Z5zRXqk92GJVDKpkWI6Vjm/exec',
        body
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
}
