import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {

  constructor(
    private location: Location,
    private cdr: ChangeDetectorRef,
    private router: Router) {
    this.qrCode = window.location.href;
  }

  qrCode: string = '';
  qrCodeWidth = 0;
  isQrCodeSizeUpdated = false;

  ngOnInit() {
  }

  navigateBack() {
    this.location.back();
  }

  updateQrCodeWidth() {
    let clientWidth: any = document.getElementById('warrantyCard')?.offsetWidth;
    if (clientWidth) {
      let size = clientWidth / 4;
      this.qrCodeWidth = size;
      this.isQrCodeSizeUpdated = true;
      this.cdr.detectChanges();
    }
  }

  navCardDetails() {
    this.router.navigate(['card-details'])
  }
}
