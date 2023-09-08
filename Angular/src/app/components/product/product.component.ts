import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  product1={
    productld: 1,
    productName: ' Bardak ',
    categoryld: 1,
    unitPrice: 5,
  }

  product2={
    productld: 1,
    productName: 'Kova ',
    categoryld: 1,
    unitPrice: 5,
  }
  product3={
    productld: 1,
    productName: ' Laptop ',
    categoryld: 1,
    unitPrice: 5,
  }

  products=[
    this.product1,
    this.product2,
    this.product3,
  ];
  
}
