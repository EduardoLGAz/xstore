import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product-service';
import { Product } from '../../commons/types/Product';
import { AuthService } from '../../services/auth-service';
import { CurrencyPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { StateService } from '../../services/state-service';

@Component({
  selector: 'app-item-detail-page',
  imports: [CurrencyPipe, MatIconModule, MatButtonModule, HttpClientModule],
  providers: [ProductService],
  templateUrl: './item-detail-page.html',
  styleUrl: './item-detail-page.css',
})
export class ItemDetailPage {
  isNotFound = true;
  isLoggedIn;
  products: Product[] = [] as Product[];
  // products;
  product: Product = {} as Product;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private productService: ProductService,
    private stateService: StateService
  ) {
    console.log('ItemDetailPage constructor');
    this.isLoggedIn = this.authService.isLoggedIn;
    this.products = this.stateService.lastProductList;
    this.product = this.stateService.lastProductTouched;
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      if (id === this.product.id.toString()) this.isNotFound = false;
      else {
        const findProduct = this.products.find(
          (product) => product.id.toString() === id
        );
        if (findProduct) {
          this.product = findProduct;
          this.isNotFound = false;
        }
      }
    }
  }
  addToCart() {
    console.log(this.product);
  }
}
