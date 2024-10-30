import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  navigateHome(){
    // this.router.navigate(['/cart'])
    this.location.back();
  }

}
