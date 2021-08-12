import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers: [NgbCarouselConfig]
})
export class SliderComponent implements OnInit {
  images = [
    '../../../assets/banners/img_1.jpg',
    '../../../assets/banners/img_2.jpg',
    '../../../assets/banners/img_3.jpg',
    '../../../assets/banners/img_4.jpg'
  ]
  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.keyboard = false;
    config.pauseOnHover = false;

  }


  ngOnInit(): void {
  }

}
