import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { IProducts } from '../products';
@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  public products !: IProducts[];
  constructor( private productsService : ProductsService ) { }
  ngOnInit(): void {
    this.productsService.getProducts()
      .subscribe(data => this.products = data)
  }
}