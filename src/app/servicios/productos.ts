import { Injectable } from '@angular/core';
import { Producto } from '../modelos/producto';

@Injectable({
  providedIn: 'root'
})
export class Productos {

  productos = [ new Producto(1, 'Producto 1', 'Descripción del producto 1', 100, 'https://d1fufvy4xao6k9.cloudfront.net/images/landings/421/3-4-1.jpg'),
                new Producto(2, 'Producto 2', 'Descripción del producto 2', 200, 'https://d1fufvy4xao6k9.cloudfront.net/images/landings/421/3-4-1.jpg'),
                new Producto(3, 'Producto 3', 'Descripción del producto 3', 300, 'https://d1fufvy4xao6k9.cloudfront.net/images/landings/421/3-4-1.jpg'),
                new Producto(4, 'Producto 4', 'Descripción del producto 4', 400, 'https://d1fufvy4xao6k9.cloudfront.net/images/landings/421/3-4-1.jpg'),
                new Producto(5, 'Producto 5', 'Descripción del producto 5', 500, 'https://d1fufvy4xao6k9.cloudfront.net/images/landings/421/3-4-1.jpg'),
                new Producto(6, 'Producto 1', 'Descripción del producto 1', 100, 'https://d1fufvy4xao6k9.cloudfront.net/images/landings/421/3-4-1.jpg'),
                new Producto(7, 'Producto 2', 'Descripción del producto 2', 200, 'https://d1fufvy4xao6k9.cloudfront.net/images/landings/421/3-4-1.jpg'),
                new Producto(8, 'Producto 3', 'Descripción del producto 3', 300, 'https://d1fufvy4xao6k9.cloudfront.net/images/landings/421/3-4-1.jpg'),
                new Producto(9, 'Producto 4', 'Descripción del producto 4', 400, 'https://d1fufvy4xao6k9.cloudfront.net/images/landings/421/3-4-1.jpg')];
                

  constructor() { }
}
