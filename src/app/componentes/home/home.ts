import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Productos } from '../../servicios/productos';
import { Producto } from '../../modelos/producto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgbCarouselModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  productos!: Producto[];
  constructor(productoService: Productos) {
    this.productos = productoService.productos;
  }
}
