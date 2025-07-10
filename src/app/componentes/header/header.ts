import { Component, effect, inject, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Productos } from '../../servicios/productos';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private productosService = inject(Productos);
  cantProductos: number = 0;
  constructor() {
    effect(() => {
      this.cantProductos = this.productosService.cantProductos();
    });
  }
}
