import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item, Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  loading = true;
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    return new Promise((resolve, reject) => {
      this.http
        .get<Product[]>(
          'https://angular-curso-1-default-rtdb.firebaseio.com/productos_idx.json'
        )
        .subscribe(
          (res) => {
            this.products = res;
            this.loading = false;
            resolve(res);
          },
          (err) => reject(err)
        );
    });
  }

  getProduct(id: string): Observable<Item> {
    return this.http.get<Item>(
      `https://angular-curso-1-default-rtdb.firebaseio.com/productos/${id}.json`
    );
  }

  findProduct(term: string) {
    if (this.loading) {
      this.loadProducts().then(() => {
        this.filterProducts(term);
      });
    } else {
      this.filterProducts(term);
    }
  }

  filterProducts(term: string) {
    const lowerTerm = term;
    this.filteredProducts = this.products.filter(
      (p) =>
        p?.categoria?.toLowerCase().indexOf(lowerTerm) > -1 ||
        p?.titulo?.toLowerCase().indexOf(lowerTerm) > -1
    );
  }
}
