import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styles: [`
    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      background-color: #f0f0f0;
      padding: 10px;
      margin: 5px 0;
      border-radius: 5px;
    }

    button {
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      padding: 8px 16px;
      margin-left: 10px;
    }

    button:hover {
      background-color: #0056b3;
    }

    input {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 3px;
    }
  `]
})
export class ProductListComponent {

  constructor(private productService: ProductService) {}

  getProducts(): string[] {
    return this.productService.getProducts();
  }

  getTotalProducts(): number {
    return this.productService.getProductCount();
  }

  addNewProduct(productName: string): void {
    if (productName.trim()) {
      this.productService.addProduct(productName);
    }
  }
}