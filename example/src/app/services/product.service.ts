import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: string[] = ['Laptop', 'Phone', 'Tablet'];

  getProducts(): string[] {
    return this.products;
  }

  addProduct(product: string): void {
    this.products.push(product);
  }

  getProductCount(): number {
    return this.products.length;
  }
}