import { Injectable } from "@angular/core";
import { Product } from "../commons/types/Product";

@Injectable({
  providedIn: "root",
})
export class StateService {
  // isLogedIn: boolean = false;
  // cart: Product[] = [] as Product[];
  isInCart: boolean = false;
  lastProductList: Product[] = [] as Product[];
  lastProductTouched: Product = {} as Product;
}
