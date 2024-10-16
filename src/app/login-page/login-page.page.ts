import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators  } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder) { }


  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],


  })

  ngOnInit() {
  }

  submitForm(){

    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
   
    
  }

  signup(){
    this.router.navigate(['/signup-page'])
    console.log("hello");
    
  }

}
