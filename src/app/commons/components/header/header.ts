import { Component, signal } from '@angular/core';
import { PATHS } from '../../types/PATHS';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth-service';
import { CartService } from '../../../services/cart-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isLoggedIn;
  cartLength;
  PATHS = PATHS;
  constructor(
    private authService: AuthService,
    private cartService: CartService
  ) {
    this.isLoggedIn = this.authService.isLoggedIn;
    this.cartLength = this.cartService.cartLength;
  }

  logOut() {
    this.isLoggedIn.update((value) => false);
  }
}
