import { Injectable, signal } from '@angular/core';
import { Product } from '../commons/types/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  conteudoCarrinho = signal([] as Product[]);
  cartLength = signal(0);

  getCart() {
    return this.conteudoCarrinho();
  }
  addToCart(product: Product) {
    this.conteudoCarrinho.update((products) => [...products, product]);
    this.cartLength.set(this.conteudoCarrinho().length);
    console.log(this.conteudoCarrinho());
  }
  getCartLength() {
    return this.cartLength();
  }
  clearCart() {
    this.conteudoCarrinho.set([]);
    this.cartLength.set(0);
  }
  removeFromCart(productId: number) {
    this.conteudoCarrinho.update((products) =>
      products.filter((product) => product.id !== productId)
    );
    this.cartLength.set(this.conteudoCarrinho().length);
  }
}
