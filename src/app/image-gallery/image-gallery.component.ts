import { Component, OnInit } from '@angular/core';
import { Image } from '../Image';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  imagedata = [
    new Image("https://images.all-free-download.com/images/graphicwebp/wood_cut_angel_561796.webp"),
    new Image("https://images.all-free-download.com/images/graphicwebp/sunrise_3_x_sun_drawing_218418.webp")
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
