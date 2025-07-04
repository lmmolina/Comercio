export class Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  imagenUrl: string;

  constructor(
    id: number,
    nombre: string,
    precio: number,
    descripcion: string,
    imagenUrl: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.imagenUrl = imagenUrl;
  }
}
