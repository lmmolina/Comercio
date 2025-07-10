import { Injectable, signal } from '@angular/core';
import { Producto } from '../modelos/producto';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Productos {
  total: number = 0;
  idCarrito!: number;
  cantProductos = signal<number>(0);
  constructor(private http: HttpClient) {}

  getPremiumProducts(): Observable<Producto[] | null> {
    return this.http
      .get<any>('https://dummyjson.com/products?limit=100', {
        observe: 'response',
      })
      .pipe(
        map((res) => {
          if (res.ok && res.body) {
            this.total = res.body.total;
            console.log(this.total + ' ' + res.body.products.length);
            return res.body.products.filter((r: Producto) => r.price > 500);
          }
          return null;
        })
      );
  }

  getProductsPerPAge(page: number): Observable<HttpResponse<any>> {
    return this.http.get<any>(
      'https://dummyjson.com/products?limit=15&skip=' + page * 15,
      { observe: 'response' }
    );
  }

  getProductByID(id: number): Observable<HttpResponse<Producto>> {
    return this.http.get<Producto>('https://dummyjson.com/products/' + id, {
      observe: 'response',
    });
  }

  addProductToCart(id: number) {
    const idcar = localStorage.getItem('idCarrito');
    this.idCarrito = idcar !== null ? +idcar : -1;
    let body: any = {
      products: [
        {
          id: id,
          quantity: 1,
        },
      ],
    };
    if (this.idCarrito == -1) {
      body.userId = 1;
      var solicitud = this.http.post<any>(
        'https://dummyjson.com/carts/add',
        body,
        {
          observe: 'response',
        }
      );
    } else {
      body.merge = true;
      var solicitud = this.http.put<any>(
        'https://dummyjson.com/carts/' + this.idCarrito,
        body,
        {
          observe: 'response',
        }
      );
    }

    solicitud
      .pipe(
        map((res) => {
          if (res.ok && res.body) {
            if (this.idCarrito == -1) {
              localStorage.setItem('idCarrito', res.body.id);
            }
            this.cantProductos.set(+res.body.totalProducts);
          }
        })
      )
      .subscribe();
  }
}
