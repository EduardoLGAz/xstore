import { HttpClient } from "@angular/common/http";
import { Injectable, signal } from "@angular/core";
import { tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isLoggedIn = signal(false);
  isAdmin = signal(false);
  private readonly URL = "https://fakestoreapi.com/auth/login";

  constructor(private http: HttpClient) {}

  logIn(credencials: { username: string; password: string }) {
    // if (credencials.username === "teste") {
    //   this.isLoggedIn.set(true);
    //   localStorage.setItem("token", "response.token");
    //   this.isAdmin.set(true);
    //   return true;
    // }
    return this.http.post<{ token: string }>(this.URL, credencials).pipe(
      tap((response) => {
        this.isLoggedIn.set(true);
        localStorage.setItem("token", response.token);
        if (credencials.username === "johnd") {
          this.isAdmin.set(true);
        } else {
          this.isAdmin.set(false);
        }
      })
    );
  }

  getToken() {
    return localStorage.getItem("token");
  }

  logOut() {
    this.isLoggedIn.set(false);
    this.isAdmin.set(false);
    localStorage.removeItem("token");
  }
}
