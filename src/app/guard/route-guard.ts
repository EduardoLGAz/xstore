import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { PATHS } from "../commons/types/PATHS";
import { AuthService } from "../services/auth-service";

export const routeGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) {
    router.navigate([PATHS.login]);
    return false;
  }
  return true;
};
