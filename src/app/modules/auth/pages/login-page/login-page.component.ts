import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { response } from 'express';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.css',
    standalone: true,
    imports: [ReactiveFormsModule, NgIf]
})
export class LoginPageComponent implements OnInit {

  errorSession: boolean = false // lo inicializamos en falsa para que no aparesca
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
    .subscribe(response => { // cuando el usuario tiene las credenciales correctas
      console.log('Session iniciada correcta');
    }, err => {
      this.errorSession = true
      console.log('Ocurrio un problema con tu password o Email');
      alert('No tienes conexion con el servidor🚨')
    })
  }

}
