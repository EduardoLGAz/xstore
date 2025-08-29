import { Injectable, signal } from "@angular/core";
import { Product } from "../commons/types/Product";
import { HttpClient } from "@angular/common/http";
import { map, Observable, tap } from "rxjs";
import { toObservable } from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  products = signal([] as Product[]);

  private readonly URL = "https://fakestoreapi.com/products";

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    console.log("Fetching products from API...");
    return this.http.get<Product[]>(this.URL);
  }
  getProductById(
    id: string,
    newRequest: boolean = true
  ): Observable<Product | undefined> {
    return toObservable(this.products).pipe(
      map((products) =>
        products.find((product) => product.id.toString() === id)
      )
    );
  }

  addProduct(newProduct: Product): Observable<Product> {
    return this.http.post<Product>(this.URL, newProduct).pipe(
      tap((createdProduct) => {
        this.products.update((currentProducts) => [
          ...currentProducts,
          createdProduct,
        ]);
      })
    );
  }

  updateProduct(updatedProduct: Product): Observable<Product> {
    const url = `${this.URL}/${updatedProduct.id}`;
    return this.http.put<Product>(url, updatedProduct);
  }

  deleteProduct(id: number): Observable<void> {
    const url = `${this.URL}/${id}`;
    return this.http.delete<void>(url).pipe(
      tap(() => {
        this.products.update((currentProducts) =>
          currentProducts.filter((product) => product.id !== id)
        );
      })
    );
  }
}
