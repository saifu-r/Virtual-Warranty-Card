import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faXmark, faRotateRight, faGear, faArrowRightFromBracket, faCartShopping } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isCardVisible: boolean= true
  isDropdownActive= false;

  icons= {
    faXmark: faXmark,
    faRotateRight: faRotateRight,
    faGear: faGear,
    faArrowRightFromBracket: faArrowRightFromBracket,
    faCartShopping: faCartShopping,


  }

  constructor(private router: Router) {}

  cardClick(){
    console.log("hello");
    
  }

  hideCard(){
    this.isCardVisible= false
  }

  showHideDropdown(){
    this.isDropdownActive= !this.isDropdownActive;
    console.log(this.isDropdownActive);
  }

  logout(){
    localStorage.removeItem("userEmail");
    this.router.navigate(['/login-page'])
    
  }

}
