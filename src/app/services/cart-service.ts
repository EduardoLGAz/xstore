import { Injectable, signal } from "@angular/core";
import { Product } from "../commons/types/Product";

@Injectable({
  providedIn: "root",
})
export class CartService {
  cartProducts = signal([] as Product[]);
  cartLength = signal(0);
  cartTotal = signal(0);
  isInCart = signal(false);

  getCart() {
    return this.cartProducts();
  }
  addToCart(product: Product) {
    this.cartProducts.update((products) => [...products, product]);
    this.cartLength.set(this.cartProducts().length);
    this.cartLength.set(this.cartProducts().length);
    this.cartTotal.update((total) => total + product.price);
    console.log(this.cartProducts());
  }
  getCartLength() {
    return this.cartLength();
  }
  getCartTotal() {
    return this.cartTotal();
  }
  clearCart() {
    this.cartProducts.set([]);
    this.cartLength.set(0);
    this.cartTotal.set(0);
  }
  removeFromCart(productId: number) {
    this.cartProducts.update((products) =>
      products.filter((product) => product.id !== productId)
    );
    this.cartLength.set(this.cartProducts().length);
    this.cartTotal.set(
      this.cartProducts().reduce((total, product) => total + product.price, 0)
    );
  }
}
