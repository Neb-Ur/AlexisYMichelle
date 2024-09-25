import { Component } from '@angular/core';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.scss']
})
export class GiftComponent {
  copied: boolean = false;

  copyBankInfo() {
    const bankInfo = `
      Banco: Banco Estado
      Titular: Alexis Sánchez
      RUT: 20.792.617-5
      Tipo de cuenta: Cuenta Corriente
      Cuenta: 20792617
      Correo: Alexis.sanchez.olmedo@gmail.com
    `;

    // Crear un elemento temporal para copiar el texto
    const tempElement = document.createElement('textarea');
    tempElement.value = bankInfo;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);

    // Mostrar mensaje de copiado exitoso
    this.copied = true;

    // Ocultar mensaje después de 2 segundos
    setTimeout(() => {
      this.copied = false;
    }, 2000);
  }
}
