// import { HttpClient } from '@angular/common/http';
import { Injectable, ChangeDetectorRef } from '@angular/core';

export interface Dataset{
  products?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  qrCode: string = '';
  qrCodeWidth = 0;
  isQrCodeSizeUpdated = false;

  constructor(private cdr: ChangeDetectorRef) {
    this.qrCode = window.location.href;
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
  




}
