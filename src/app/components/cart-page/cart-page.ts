import { Component } from '@angular/core';
import { Product } from '../../commons/types/Product';
import { ItemCard } from '../item-card/item-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-page',
  imports: [ItemCard, CommonModule],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css',
})
export class CartPage {
  cartProducts(): Product[] {
    return [] as Product[];
  }
  showDetail(product: Product) {
    console.log(product);
  }
}
