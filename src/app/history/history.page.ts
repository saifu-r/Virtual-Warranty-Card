import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  cart: any[] = []
  cartTotal: number = 0


  

  constructor(private location: Location) { }

  ngOnInit() {
    this.storeCart();
  }

  storeCart(){
    this.cart= [
      {name: 'iPhone 16 Pro Max', price: 99000, quantity: 2, totalPrice: 198000},
      {name: 'Pixel 7', price: 52000, quantity: 1, totalPrice: 52000},
      {name: 'Samsung s24 Ultra', price: 85000, quantity: 1, totalPrice: 85000}
    ]
    this.cartTotal= 335000
  }

  navigateHome(){
    // this.router.navigate(['/cart'])
    this.location.back();
  }

}
