import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.page.html',
  styleUrls: ['./card-details.page.scss'],
})
export class CardDetailsPage implements OnInit {

  product = [
    {
      "name": "Pixel 7",
      "description": "Lorem, ipsum dolor sit",
      "price": "52000",
      "img": ""

    }
  ]

  constructor(private location: Location) { }

  ngOnInit() {
  }

  navigateBack(){
    this.location.back();
  }

}
