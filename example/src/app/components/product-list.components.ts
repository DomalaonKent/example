import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
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