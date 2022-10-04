import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productDetails = [
    new Product("Product Name 1", 112345 ,"https://kullabs.com/uploads/Product-Review-Writing-Services.jpg"),
    new Product("Product Name 2", 987654 ,"https://kullabs.com/uploads/Product-Review-Writing-Services.jpg")
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
