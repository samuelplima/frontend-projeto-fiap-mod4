import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html'
})
export class RegistrationPageComponent implements OnInit {

  public userRegistration: Array<{ type: string, name: string, placeholder: string, textLabel: string }> = [
    { type: 'text', name: 'registration-page__fullname', placeholder: 'Nome Completo', textLabel: 'Nome Completo' },
    { type: 'date', name: 'registration-page__birthdate', placeholder: 'Data de Nascimento', textLabel: 'Data de Nascimento' },
    { type: 'text', name: 'registration-page__gender', placeholder: 'Gênero', textLabel: 'Gênero' },
    { type: 'text', name: 'registration-page__cpf', placeholder: 'CPF', textLabel: 'CPF' },
    { type: 'text', name: 'registration-page__phone', placeholder: '(00) 00000-0000', textLabel: 'Número de Telefone' },
    { type: 'password', name: 'registration-page__password', placeholder: 'Senha', textLabel: 'Senha' },
    { type: 'password', name: 'registration-page__password-confirm', placeholder: 'Senha', textLabel: 'Senha' }
  ];

  public addressRegistration: Array<{ type: string, name: string, placeholder: string, textLabel: string }> = [
    { type: 'text', name: 'registration-page__zipcode', placeholder: '00000-000', textLabel: 'CEP' },
    { type: 'text', name: 'registration-page__address', placeholder: 'Endereço', textLabel: 'Endereço' },
    { type: 'number', name: 'registration-page__number', placeholder: 'Número', textLabel: 'Número' },
    { type: 'text', name: 'registration-page__neighborhood', placeholder: 'Bairro', textLabel: 'Bairro' },
    { type: 'text', name: 'registration-page__complement', placeholder: 'Complemento', textLabel: 'Complemento' },
    { type: 'text', name: 'registration-page__city', placeholder: 'Cidade', textLabel: 'Cidade' },
    { type: 'text', name: 'registration-page__state', placeholder: 'Estado', textLabel: 'Estado' },
  ];

  public registration: Array<{ textLink: string, href: string }> = [
    { textLink: 'Finalizar Cadastro', href: '/' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
