import { Routes } from '@angular/router';
import { Home } from './componentes/home/home';
import { ListarProductos } from './componentes/listar-productos/listar-productos';
import { Contacto } from './componentes/contacto/contacto';
import { ProductoComponent } from './componentes/producto/producto';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'productos',
    component: ListarProductos,
  },
  {
    path: 'producto/:id',
    component: ProductoComponent,
  },
  {
    path: 'contacto',
    component: Contacto,
  },
  {
    path: '**',
    component: Home,
  },
];
