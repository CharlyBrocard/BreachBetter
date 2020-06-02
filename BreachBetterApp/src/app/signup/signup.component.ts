import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { error } from 'util';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.initSignupForm();
  }

  initSignupForm(){
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmitSignupForm(){
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;
    this.authenticationService.signUpUser(email, password).then(
      () => {
        console.log('ok');
      }
    ).catch(
      (error) => {
        console.log(error);
        
      }
    );
  }

}
