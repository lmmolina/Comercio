import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Productos } from '../../servicios/productos';
import { Producto } from '../../modelos/producto';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NgbCarouselModule, CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  productos!: Producto[];
  constructor(private productoService: Productos) {}
  ngOnInit(): void {
    this.productoService.getPremiumProducts().subscribe((data) => {
      if (data) {
        this.productos = data;
      }
    });
  }
}
