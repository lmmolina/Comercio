import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../modelos/producto';
import { Productos } from '../../servicios/productos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto',
  imports: [CommonModule],
  templateUrl: './producto.html',
  styleUrl: './producto.scss',
})
export class ProductoComponent {
  producto!: Producto;
  constructor(route: ActivatedRoute, productos: Productos) {
    let id = Number(route.snapshot.paramMap.get('id'));
    productos.productos.forEach((p) => {
      if (p.id == id) {
        this.producto = p;
      }
    });
  }

  agregarAlCarrito() {}
}
