import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Router } from '@angular/router';
import { faXmark, faRotateRight, faGear, faArrowRightFromBracket, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { DatasetService } from '../services/dataset.service';
    

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  @ViewChild(IonModal) modal!: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string = "";
  isCardVisible: boolean = true
  isDropdownActive = false;

  qrCode: string = '';

  products: any[]= []

  icons = {
    faXmark: faXmark,
    faRotateRight: faRotateRight,
    faGear: faGear,
    faArrowRightFromBracket: faArrowRightFromBracket,
    faCartShopping: faCartShopping,
  }

  constructor(
    private router: Router,
    private location: Location,
    private datasetService: DatasetService
  ) {
    this.qrCode = window.location.href;
  }

  ngOnInit(){
      this.loadData()
  }

  cardClick() {
    console.log("hello");
  }

  hideCard() {
    this.isCardVisible = false
  }

  showHideDropdown() {
    this.isDropdownActive = !this.isDropdownActive;
    console.log(this.isDropdownActive);
  }

  logout() {
    localStorage.removeItem("userEmail");
    this.router.navigate(['/login-page'])
  }

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

  async loadData(){
    let productsRes: any = await this.datasetService.get({ products: true });
    if (productsRes.success == true) {
      this.products = productsRes.data;
    }
  }

}
