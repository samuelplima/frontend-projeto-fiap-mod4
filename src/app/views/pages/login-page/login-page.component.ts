import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent implements OnInit {

  public namePage: string = 'login-page';

  public login: Array<{ textLink: string, href: string }> = [
    { textLink: 'Login', href: '/home' }
  ];

  public registration: Array<{ textLink: string, href: string }> = [
    { textLink: 'Cadastro', href: '/registration' }
  ];

  public fields: Array<{ type: string, name: string, placeholder: string, textLabel: string }> = [
    { type: 'text', name: 'login-page__username', placeholder: 'Email ou CPF', textLabel: 'Email ou CPF' },
    { type: 'password', name: 'login-page__password', placeholder: 'Senha', textLabel: 'Senha' }
  ];

  constructor() { }

  ngOnInit(): void { }

}
