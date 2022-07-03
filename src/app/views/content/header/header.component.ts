import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  @Input() headerLink: any;

  public nameContent: string = "header__my-account";
  public icon: { href: string, img: string, text: string } = {
    href: '/my-account',
    img: 'account_circle',
    text: 'Olá Fulano!\nAcesse sua conta aqui.'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
