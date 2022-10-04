import { Component, OnInit } from '@angular/core';
import { MyAPIService } from '../my-api.service';
import { IProduct } from '../myAPI';

@Component({
  selector: 'app-my-api',
  templateUrl: './my-api.component.html',
  styleUrls: ['./my-api.component.css']
})
export class MyApiComponent implements OnInit {
  public product !: IProduct[];
  constructor( private myAPIService : MyAPIService ) { }
  ngOnInit(): void {
    this.myAPIService.getProducts()
      .subscribe(data => this.product = data)
  }
}
