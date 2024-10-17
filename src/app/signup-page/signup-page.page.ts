import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.page.html',
  styleUrls: ['./signup-page.page.scss'],
})
export class SignupPagePage implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder) { }


  signinForm= this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    age: ['', [Validators.required]],
    password: ['', [Validators.required]],
    DOB: ['', [Validators.required]]
  })

  ngOnInit() {
  }

  submitForm(){
    if (this.signinForm.valid) {
      // console.log(this.loginForm.value);
      const userEmail: string= this.signinForm.value.email || ""
      localStorage.setItem("userEmail", userEmail )
      this.router.navigate(['/home'])
    }
  }


  login(){
    this.router.navigate(['/login-page'])
  }



}
