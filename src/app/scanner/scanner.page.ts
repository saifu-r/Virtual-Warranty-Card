import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {

  qrResultString: string= '';

  constructor() { }

  ngOnInit() {
  }

  handleQrCodeResult(resultString: string) {
    // console.debug('Result: ', resultString);
    this.qrResultString = resultString;
    window.location.href = resultString;
  }

}
