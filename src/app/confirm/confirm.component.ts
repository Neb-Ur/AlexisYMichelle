import { Component, Input, OnInit } from '@angular/core';
import { InvitadosService } from '../service/invitados.service';
import { Invitado } from '../init/model/invitado.model';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent  implements OnInit{
  @Input() data?: Invitado;
  responseMessage: string | null = null;
  confirmClick = false;

  constructor(private service: InvitadosService) {}

  ngOnInit(): void {
    setTimeout(async () => {
        this.setResponseMessage(this.data?.confirmacion || false);
        console.log(this.data)

    }, 1000);
  }

  confirmAttendance(): void {
    this.setResponseMessage(true);
    this.addAttendance(true);
  }

  declineAttendance(): void {
    this.setResponseMessage(false);
    this.addAttendance(false);
  }

  private setResponseMessage(isConfirmed: boolean): void {
    if(this.data?.confirmacion == null){
return;
    }
    this.responseMessage = isConfirmed
      ? '¡Gracias por confirmar tu asistencia! ¡Nos vemos pronto!'
      : 'Lamentamos que no puedas asistir, ¡gracias por avisar!';
  }

  private async addAttendance(confirm: boolean): Promise<void> {
    if (!this.data) return;

    this.confirmClick = true;
    this.data.confirmacion = confirm;
    this.data.fecha = new Date();

    try {
      const response = await this.service.filteredUpdate("id", this.data.id, this.data).toPromise();
      console.log('PATCH response:', response);
    } catch (error) {
      console.error('Error:', error);
    }
  }
}