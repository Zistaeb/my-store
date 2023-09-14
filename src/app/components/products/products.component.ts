import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  myShoppingCar: Product[] = [];
  total = 0;
  products: Product[] = [];
  today = new Date();
  date = new Date(2021, 1, 21)

  constructor(
    private storeService: StoreService,              //patron inyeccion de dependencia
    private productsService: ProductsService
  ) {
    this.myShoppingCar = this.storeService.getShoppingCar();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data =>{                        //observables
      this.products = data;
    })
  }

  onAddToShoppingCar(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

}
