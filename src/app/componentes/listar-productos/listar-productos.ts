import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Productos } from '../../servicios/productos';
import { Producto } from '../../modelos/producto';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-productos',
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-productos.html',
  styleUrl: './listar-productos.scss',
})
export class ListarProductos {
  productos!: Producto[];
  constructor(productos: Productos) {
    this.productos = productos.productos;
  }
  agregarAlCarrito(producto: any) {}
}
