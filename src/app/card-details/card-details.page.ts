import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';

import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.page.html',
  styleUrls: ['./card-details.page.scss'],
})
export class CardDetailsPage implements OnInit {

  @ViewChild(IonModal) modal!: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string= "";

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  product = [
    {
      "name": "Pixel 7",
      "description": "The Google Pixel 7 is a sleek smartphone with a 6.3-inch OLED display, known for its vibrant colors and smooth 90Hz refresh rate. Powered by Google’s custom Tensor G2 chip, it offers enhanced AI features, efficient performance, and excellent battery life.",
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
