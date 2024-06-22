import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { Clipboard } from '@angular/cdk/clipboard';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { InvitadosService } from '../service/invitados.service';

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
  id?: string;
  isLoading = true; // Cambia esto a false cuando el loading termine

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
  name?: string;
  bankName: string = 'Banco Estado';
  accountNumber: string = '1888706';
  accountHolder: string = 'Beker Bastian Rojas Pacheco';
  transferKey: string = 'Cuenta Corriente';
  correo: string = 'beker.rojas@gmail.com';
  rut: string = '18.118.414-4';
  confirmationStatus: string = '';
  fadeOut = false;
  data: any;
  invitados = [
    {
      id: 1,
      name: 'Karina y Kevin Hernandez',
    },
    {
      id: 2,
      name: 'Catherine y Kevin Vargas',
    },
    {
      id: 3,
      name: 'Familia Cadena Auad',
    },
    {
      id: 4,
      name: 'Deyanira y Fabio Auad',
    },
    {
      id: 5,
      name: 'Familia Rojas Pacheco',
    },
    {
      id: 6,
      name: 'Alejandro Rojas y Hilda Abarca',
    },
    {
      id: 7,
      name: 'Elizabeth Rojas',
    },
    {
      id: 8,
      name: 'Marianela y Cesar Rojas',
    },
    {
      id: 9,
      name: 'Familia Cristi Chavez',
    },
    {
      id: 10,
      name: 'Nicole Donoso y Pedro Fuentes',
    },
    {
      id: 11,
      name: 'Familia Cruz Mendez',
    },
    {
      id: 12,
      name: 'Veronica Chavez',
    },
  ];

  loadingData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  showLoading = true;

  categoriesData = [
    { id: 1, name: 'all' },
    { id: 2, name: 'hosting' },
    { id: 3, name: 'ecommerce' },
    { id: 4, name: 'product' },
    { id: 5, name: 'finance' },
    { id: 6, name: 'course' },
  ];

  filterData: any = [];
  resData: any;
  pageNo = 1;

  constructor(
    private clipboard: Clipboard,
    private http: HttpClient,
    private route: ActivatedRoute,
    private service: InvitadosService
  ) {}

  ngOnInit(): void {
    this.getValues();
    console.log(this.invitados);
    this.route.paramMap.subscribe((params) => {
      console.log(params.get('id'));
      //this.id = params.get('id');
      // Puedes realizar cualquier acción adicional con el ID aquí
      this.id = params.get('id') ?? '';
      if (this.id != '') {
        this.name = this.invitados.find((x) => x.id == Number(this.id))?.name;
      }
    });
    this.audio = new Audio('/assets/music/song.mp3');
    this.clock = this.source.subscribe((t) => {
      this.now = new Date();
      this.end = new Date('09/14/2024 18:00');
      this.showDate();
    });
    this.loadData();
  }

  loadData() {
    // Simulación de carga de datos
    setTimeout(() => {
      this.startFadeOut();
    }, 3000); // 3 segundos de espera
  }

  startFadeOut() {
    this.fadeOut = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 500); // Espera 0.5 segundos para la transición
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

  getValues() {
    console.log('test');
    this.service.list().subscribe({
      next: (res) => {
        this.data = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  //https://script.google.com/macros/s/AKfycbxViV8BnTM6cCrK6Xz4uOQ_WFbdIUj0OE0ebwlXTLh5hxQtJxva7rw41jJVWce5jBEh/exec
}
