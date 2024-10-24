import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Router } from '@angular/router';
import { faXmark, faRotateRight, faGear, faArrowRightFromBracket, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Location, } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})
export class HomePage implements OnInit {

  @ViewChild(IonModal) modal!: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string = "";
  isCardVisible: boolean = true
  isDropdownActive = false;
  qrCode: string = '';

  clientWidth = 0

  isToastOpen = false;

  icons = {
    faXmark: faXmark,
    faRotateRight: faRotateRight,
    faGear: faGear,
    faArrowRightFromBracket: faArrowRightFromBracket,
    faCartShopping: faCartShopping,
  }


  products = [
    {
      "name": "Pixel 7",
      "description": "Lorem, ipsum dolor sit",
      "price": "52000",
      "img": ""

    },
    {
      "name": "iPhone 16 Pro Max",
      "description": "Lorem, ipsum dolor sit",
      "price": "99000",
      "img": ""
    },
    {
      "name": "Samsung s24 Ultra",
      "description": "Lorem, ipsum dolor sit",
      "price": "85000",
      "img": ""
    },
    {
      "name": "Xiomi 12 Pro",
      "description": "Lorem, ipsum dolor sit",
      "price": "32000",
      "img": ""
    }
  ]


  cart: any[] = []
  cartTotal: number = 0

  qrCodeWidth = 0;
  isQrCodeSizeUpdated = false;

  constructor(
    private router: Router,
    private location: Location,
    private cdr: ChangeDetectorRef
  ) {
    this.qrCode = window.location.href;
  }

  ngOnInit() {
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

  addToCart(product: any) {
    const productInCart = this.cart.find(item => item.name === product.name);
    const productPrice = Number(product.price);
    if (productInCart) {
      productInCart.quantity++;
      productInCart.totalPrice = productInCart.quantity * productPrice;
    } else {
      this.cart.push({
        name: product.name,
        price: productPrice,
        quantity: 1,
        totalPrice: productPrice
      });
    }
    this.cartTotal = this.getCartTotal();
  }

  getCartTotal(): number {
    let totalSum = 0;
    for (let i = 0; i < this.cart.length; i++) {
      const item = this.cart[i];
      totalSum += item.totalPrice;
    }
    return totalSum;
  }

  removeFromCart(product: any) {
    const index = this.cart.indexOf(product);  // Find the index of the product
    if (index > -1) {
      this.cart.splice(index, 1);  // Remove the product from the cart array
    }

    this.cartTotal = this.getCartTotal();
  }

  confirmOrder() {
    console.log(this.cart);
    console.log("The Total is " + this.cartTotal);
    this.cart = []
    this.cartTotal = 0
  }


  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  updateQrCodeWidth() {
    let clientWidth: any = document.getElementById('warrantyCard')?.offsetWidth;
    if (clientWidth) {
      let size = clientWidth / 2;
      this.qrCodeWidth = size;
      this.isQrCodeSizeUpdated = true;
      this.cdr.detectChanges();
    }
  }
}