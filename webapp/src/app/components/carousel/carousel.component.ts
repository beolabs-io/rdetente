import { Component } from '@angular/core';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent {

  carouselImages = [

    "http://www.maxime-coiffure-06.com/images/bg_img3.jpg",

  ];

}