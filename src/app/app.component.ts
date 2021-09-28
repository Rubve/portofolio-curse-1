import { Component } from '@angular/core';
import { GlobalConfigService } from './services/global-config.service';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    globalConfigService: GlobalConfigService,
    productsService: ProductsService
  ) {}
}
