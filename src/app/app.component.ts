import { Component } from '@angular/core';

import { Product } from './models/product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  imgParent = '';
  showImg = true;
  products: Product[] = [{
      id: '1',
      name: 'El mejor juguete',
      image: './assets/images/toy.jpg',
      price: 150
  },
  {
    id: '2',
    name: 'Bicycle new',
    image: './assets/images/bici.jpg',
    price: 500
  },
  {
    id: '3',
    name: 'Coleccion de albumes',
    image: './assets/images/albumes.jpg',
    price: 300
  },
  {
    id: '4',
    name: 'Mis libros',
    image: './assets/images/libros.jpg',
    price: 450
  },
  {
    id: '5',
    name: 'Mis velas',
    image: './assets/images/candles.jpg',
    price: 120
  },
  {
    id: '6',
    name: 'Casa para perros',
    image: './assets/images/housedog.jpg',
    price: 800
  },
  {
    id: '7',
    name: 'Gafas',
    image: './assets/images/gafas.jpg',
    price: 450
  },
]

  onloaded(img: string) {
    console.log('log padre', img);
  }

  toggleImg () {
    this.showImg = !this.showImg;
  }
}
