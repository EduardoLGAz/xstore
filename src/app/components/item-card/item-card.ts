import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../commons/types/Product';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-item-card',
  imports: [MatCardModule, CurrencyPipe, MatButtonModule, MatIconModule],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemCard {
  @Input({ required: true }) product: Product = {} as Product;

  isLoggedIn;
  constructor(private authService: AuthService) {
    this.isLoggedIn = this.authService.isLoggedIn;
  }
  addToCart() {
    console.log(this.product);
  }
}
