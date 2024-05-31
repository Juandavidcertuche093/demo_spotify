import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page.component';
import { it } from 'node:test';
import { By } from '@angular/platform-browser';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule, LoginPageComponent]
})
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //tu primer enunciado el cual debe de asegurarse lo siguiente
  //Debe de asegurarse que el formulario sea invalido cuando ingrese datos erroneos

  // patron AAA (Arrange, Act, Assert)

  it('🚨 Deberi de retornar "invalido" el formulario', () => {
    //Arrange
    const mockCredentials = {
      email: '0x0x0x0x0x0x',
      password: '1111111111111111111111111'
    }

    const emailForm: any = component.formLogin.get('email')
    const passwordForm: any = component.formLogin.get('password')

    //Act
    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)

    //Assert
    expect(component.formLogin.invalid).toEqual(true);
  });

  it('👍 Deberi de retornar "valido" el formulario', () => {
    //Arrange
    const mockCredentials = {
      email: 'test@test.com',
      password: '12345678'
    }

    const emailForm: any = component.formLogin.get('email')
    const passwordForm: any = component.formLogin.get('password')

    //Act
    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)

    //Assert
    expect(component.formLogin.invalid).toEqual(false);
  });

});
