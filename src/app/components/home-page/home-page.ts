import { Component } from '@angular/core';
import { ItemCard } from '../item-card/item-card';
import { CommonModule } from '@angular/common';
import { Product } from '../../commons/types/Product';
import { ProductService } from '../../services/product-service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { PATHS } from '../../commons/types/PATHS';
import { StateService } from '../../services/state-service';

@Component({
  selector: 'app-home-page',
  imports: [ItemCard, CommonModule, HttpClientModule],
  providers: [ProductService],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  constructor(
    private productService: ProductService,
    private router: Router,
    private stateService: StateService
  ) {
    this.products = productService.products;
  }

  products;
  ngOnInit() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products.update((value) => (value = products));
      this.stateService.lastProductList = products;
      console.log(this.products());
      console.log(this.productService.products());
    });
  }
  showDetail(product: Product) {
    this.stateService.lastProductTouched = product;
    this.router.navigate([PATHS.product + '/' + product.id]);
  }
}
