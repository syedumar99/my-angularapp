import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {
  name = "SONATA";
  day = new Date();
  price = 500;
  arr = [1, 3, 4, 2, 5, 7, 6, 9, 10, 8];
  str = ['J', 'A', 'Y']; //assignment
  constructor() { }
  ngOnInit(): void {
  }
}
