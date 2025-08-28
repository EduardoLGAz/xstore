import { Injectable, signal } from '@angular/core';
import { Product } from '../commons/types/Product';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = signal([] as Product[]);
  private readonly URL = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    console.log('Fetching products from API...');
    return this.http.get<Product[]>(this.URL);
  }
  getProductById(
    id: string,
    newRequest: boolean = true
  ): Observable<Product | undefined> {
    // if (newRequest) {
    //   return this.http.get<Product>(`${this.URL}/${id}`);
    // }
    // else if (this.products().length > 0) {
    //   return toObservable(this.products).pipe(
    //     map((products) =>
    //       products.find((product) => product.id.toString() === id)
    //     )
    //   );
    // } else {
    //   return this.http.get<Product>(`${this.URL}/${id}`).pipe(
    //     tap((product) => {
    //       this.products.update((products) => [...products, product]);
    //     }),
    //     map((product) => product)
    //   );
    // }
    return toObservable(this.products).pipe(
      map((products) =>
        products.find((product) => product.id.toString() === id)
      )
    );
  }
}
