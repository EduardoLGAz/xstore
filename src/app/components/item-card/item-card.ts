import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { CurrencyPipe } from "@angular/common";
import { Product } from "../../commons/types/Product";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { AuthService } from "../../services/auth-service";
import { StateService } from "../../services/state-service";
import { CartService } from "../../services/cart-service";

@Component({
  selector: "app-item-card",
  imports: [MatCardModule, CurrencyPipe, MatButtonModule, MatIconModule],
  templateUrl: "./item-card.html",
  styleUrl: "./item-card.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemCard {
  @Input({ required: true }) product: Product = {} as Product;
  @Output() clickDetail = new EventEmitter<Product>();
  @Output() clickDelete = new EventEmitter<Product>();
  @Output() clickAdd = new EventEmitter<Product>();

  isInCart;
  isLoggedIn;
  constructor(
    private authService: AuthService,
    private cartService: CartService
  ) {
    this.isLoggedIn = this.authService.isLoggedIn;
    this.isInCart = this.cartService.isInCart;
  }
  addToCart() {
    this.clickAdd.emit(this.product);
    console.log(this.product);
  }
  showDetail() {
    this.clickDetail.emit(this.product);
  }
  deleteFromList() {
    this.clickDelete.emit(this.product);
  }
}
