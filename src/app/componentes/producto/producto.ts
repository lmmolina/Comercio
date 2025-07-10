import { Component, OnInit } from '@angular/core';
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
export class ProductoComponent implements OnInit {
  producto!: Producto;
  constructor(private route: ActivatedRoute, private productos: Productos) {}
  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.productos.getProductByID(id).subscribe((data) => {
      if (data.ok && data.body) {
        this.producto = data.body;
      }
    });
  }

  agregarAlCarrito(id: number) {
    this.productos.addProductToCart(id);
  }
}
