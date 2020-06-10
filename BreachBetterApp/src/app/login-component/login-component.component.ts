import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { error } from 'util';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})


export class LoginComponentComponent implements OnInit {

  signinForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initSigninForm();
  }

  initSigninForm(){
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  isAuth: boolean = false;

  onSubmitSigninForm(){
  
    const email = this.signinForm.get('email').value;
    const password = this.signinForm.get('password').value;
    this.authenticationService.signInUser(email, password).then(
      (data) => {
        console.log(data);
        this.router.navigate(['/']);
        this.isAuth = true;
      }
    ).catch(
      (error) => {
        console.log(error);
        this.isAuth = false;
        
      }
    );
  }

}

