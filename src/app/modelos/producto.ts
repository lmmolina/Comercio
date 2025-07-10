export class Producto {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];

  constructor(
    id: number,
    nombre: string,
    descripcion: string,
    precio: number,
    imagenUrl: string[]
  ) {
    this.id = id;
    this.title = nombre;
    this.price = precio;
    this.description = descripcion;
    this.images = imagenUrl;
  }
}
