import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.page.html',
  styleUrls: ['./signup-page.page.scss'],
})
export class SignupPagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  login(){
    this.router.navigate(['/login-page'])
    console.log("hello");
  }

}
