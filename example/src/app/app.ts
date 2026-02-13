import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list.components';

@Component({
  selector: 'app-root',
  standalone: true,
  'imports': [ProductListComponent],
  template: `<product-list></product-list>`
})
export class AppComponent {}