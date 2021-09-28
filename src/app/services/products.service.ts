import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  loading = true;
  products: Product[] = [];

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    this.http
      .get<Product[]>(
        'https://angular-curso-1-default-rtdb.firebaseio.com/productos_idx.json'
      )
      .subscribe((res) => {
        this.products = res;
        this.loading = false;
      });
  }
}
