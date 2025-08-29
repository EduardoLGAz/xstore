import { Component, isStandalone } from "@angular/core";
import { AuthService } from "../../../services/auth-service";
import { PATHS } from "../../types/PATHS";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-login-page",
  imports: [FormsModule],
  templateUrl: "./login-page.html",
  styleUrl: "./login-page.css",
})
export class LoginPage {
  isLoggedIn;
  PATHS = PATHS;
  credencials: { username: string; password: string } = {
    username: "",
    password: "",
  };
  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn = this.authService.isLoggedIn;
    this.goToHome();
  }
  subLogin() {
    this.authService.logIn(this.credencials).subscribe(() => {
      next: this.goToHome();
    });
  }
  goToHome() {
    if (this.isLoggedIn()) {
      this.router.navigate([this.PATHS.home]);
    }
  }
}
