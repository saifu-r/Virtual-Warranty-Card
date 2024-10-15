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


  LoginForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    age: ['', Validators.required],

  })

  ngOnInit() {
  }

  submitForm(){
    console.log(this.LoginForm);
    
  }

  signup(){
    this.router.navigate(['/signup-page'])
    console.log("hello");
    
  }

}
