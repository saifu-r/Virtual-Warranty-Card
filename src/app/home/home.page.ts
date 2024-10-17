import { Component } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isCardVisible: boolean= true

  icons= {
    faXmark: faXmark
  }

  constructor() {}

  cardClick(){
    console.log("hello");
    
  }

  hideCard(){
    this.isCardVisible= false
  }

}
