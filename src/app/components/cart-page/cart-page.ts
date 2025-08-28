import { Component } from "@angular/core";
import { Product } from "../../commons/types/Product";
import { ItemCard } from "../item-card/item-card";
import { CommonModule } from "@angular/common";
import { CartService } from "../../services/cart-service";
import { StateService } from "../../services/state-service";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { PATHS } from "../../commons/types/PATHS";
import { Router } from "@angular/router";

@Component({
  selector: "app-cart-page",
  imports: [ItemCard, CommonModule, MatIconModule, MatButtonModule],
  templateUrl: "./cart-page.html",
  styleUrl: "./cart-page.css",
})
export class CartPage {
  cartProducts: Product[] = [] as Product[];
  cartLength = 0;
  // cartProducts;
  constructor(
    private cartService: CartService,
    private stateService: StateService,
    private router: Router
  ) {
    this.cartService.isInCart.set(true);
    this.cartProducts = this.cartService.getCart();
    this.cartLength = this.cartService.getCartLength();
    // console.log(this.cartService.getCart);
  }

  showDetail(product: Product) {
    this.stateService.lastProductTouched = product;
    this.router.navigate([PATHS.product + "/" + product.id]);
  }
  ngOnDestroy() {
    this.cartService.isInCart.set(false);
  }
  clearCart() {
    this.cartService.clearCart();
    this.cartProducts = this.cartService.getCart();
    this.cartLength = this.cartService.getCartLength();
  }
  deleteFromCart(product: Product) {
    this.cartService.removeFromCart(product.id);
    this.cartProducts = this.cartService.getCart();
    this.cartLength = this.cartService.getCartLength();
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.cartProducts = this.cartService.getCart();
    this.cartLength = this.cartService.getCartLength();
  }
}
