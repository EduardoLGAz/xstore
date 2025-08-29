import { Routes } from "@angular/router";
import { PATHS } from "./commons/types/PATHS";
import { HomePage } from "./components/home-page/home-page";
import { ENV_PROP } from "./commons/environment";
import { LoginPage } from "./commons/pages/login-page/login-page";
import { SigninPage } from "./commons/pages/signin-page/signin-page";
import { LoggedOutPage } from "./commons/pages/logged-out-page/logged-out-page";
import { BadPage } from "./commons/pages/bad-page/bad-page";
import { Http401Page } from "./commons/pages/http-401-page/http-401-page";
import { ItemDetailPage } from "./components/item-detail-page/item-detail-page";
import { CartPage } from "./components/cart-page/cart-page";
import { AdminPage } from "./components/admin-page/admin-page";
import { routeGuard } from "./guard/route-guard";
import { adminGuard } from "./guard/admin-guard";

export const routes: Routes = [
  {
    path: PATHS.base,
    redirectTo: PATHS.home,
    pathMatch: "full",
  },
  {
    path: PATHS.home,
    component: HomePage,
    title: ENV_PROP.title,
  },
  {
    path: PATHS.cart,
    component: CartPage,
    title: ENV_PROP.title,
    canActivate: [routeGuard],
  },
  {
    path: PATHS.product + "/:id",
    component: ItemDetailPage,
    title: ENV_PROP.title,
  },
  {
    path: PATHS.login,
    component: LoginPage,
  },
  {
    path: PATHS.signin,
    component: SigninPage,
  },
  {
    path: PATHS.logout,
    component: LoggedOutPage,
  },
  {
    path: PATHS.admin,
    component: AdminPage,
    canActivate: [adminGuard],
  },
  {
    path: PATHS.http_401,
    component: Http401Page,
  },
  {
    path: PATHS.bad_page,
    component: BadPage,
  },
  {
    path: PATHS.any_path,
    redirectTo: PATHS.bad_page,
    pathMatch: "full",
  },
];
