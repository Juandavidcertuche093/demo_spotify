import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page', 
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({});

  constructor (
    private AuthService: AuthService
  ) {}

  ngOnInit(): void {
    this.formLogin = new FormGroup (
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
        ]

        )
      }
    )
  }

  sendLogin(): void {
    const { email, password} = this.formLogin.value
    this.AuthService.sendCredentials(email, password)
  }

}
