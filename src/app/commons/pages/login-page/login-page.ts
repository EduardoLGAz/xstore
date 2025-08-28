import { Component, isStandalone } from '@angular/core';
import { AuthService } from '../../../services/auth-service';
import { PATHS } from '../../types/PATHS';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  isLoggedIn;
  PATHS = PATHS;
  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn = this.authService.isLoggedIn;
  }
  subLogin() {
    if (this.login()) {
      this.isLoggedIn.update((value) => true);
      this.router.navigate([this.PATHS.home]);
    }
  }
  login() {
    return true;
  }
}
