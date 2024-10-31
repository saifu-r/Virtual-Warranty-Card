import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { DatasetService } from '../services/dataset.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {

  constructor(private location: Location, private datasets: DatasetService) { }

  qrCode: string= this.datasets.qrCode
  qrCodeWidth = this.datasets.qrCodeWidth;
  isQrCodeSizeUpdated = this.datasets.isQrCodeSizeUpdated;


  ngOnInit() {
  }

  navigateHome(){
    this.location.back();
  }

  updateQrCodeWidth(){
    this.datasets.updateQrCodeWidth();
  }



}
