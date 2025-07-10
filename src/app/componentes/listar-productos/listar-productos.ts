import { CommonModule } from '@angular/common';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Productos } from '../../servicios/productos';
import { Producto } from '../../modelos/producto';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ForI } from '../../utils/for-i';

@Component({
  selector: 'app-listar-productos',
  imports: [CommonModule, RouterModule, ForI],
  templateUrl: './listar-productos.html',
  styleUrl: './listar-productos.scss',
})
export class ListarProductos implements OnInit {
  productos!: Producto[];
  paginas: number = 0;
  activa: number = 0;
  constructor(
    private productoService: Productos,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.activa = +params['pag'] || 0;
      this.productoService.getProductsPerPAge(this.activa).subscribe((data) => {
        if (data.ok && data.body.products) {
          this.productos = data.body.products;
          console.log('Mostrando productos');
        }
      });
    });
    if (this.productoService.total == 0) {
      this.productoService.getPremiumProducts().subscribe(() => {
        this.paginas = Math.ceil(this.productoService.total / 15);
        console.log('Mostrando paginas');
      });
    } else {
      this.paginas = Math.ceil(this.productoService.total / 15);
    }
  }

  agregarAlCarrito(producto: any) {}
}
