import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss',
})
export class Contacto {
  nombre: string = '';
  correo: string = '';
  mensaje: string = '';
  categoria: string = '';
  enviarFormulario(form: NgForm) {
    console.log(form);

    if (form.invalid) {
      Object.values(form.controls).forEach((control) =>
        control.markAsTouched()
      );
    } else {
    }
  }
}
