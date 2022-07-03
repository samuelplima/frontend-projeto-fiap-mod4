import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html'
})
export class ServicePageComponent implements OnInit {

  public nameContent: string = "service-page__return-page";

  public icon: { href: string, img: string } = {
    href: '/home',
    img: 'keyboard_arrow_left'
  };

  public items: Array<{ link: string, img: string, title: string, description: string}> = [
    { link: '/service', img: '../../../../assets/images/image-default.png', title: 'Produto 1', description: 'bla bla bla bla bla bla bla bla bla bla.'},
    { link: '/service', img: '../../../../assets/images/image-default.png', title: 'Produto 2', description: 'bla bla bla bla bla bla bla bla bla bla.'},
    { link: '/service', img: '../../../../assets/images/image-default.png', title: 'Produto 3', description: 'bla bla bla bla bla bla bla bla bla bla.'},
    { link: '/service', img: '../../../../assets/images/image-default.png', title: 'Produto 4', description: 'bla bla bla bla bla bla bla bla bla bla.'},
    { link: '/service', img: '../../../../assets/images/image-default.png', title: 'Produto 5', description: 'bla bla bla bla bla bla bla bla bla bla.'},
    { link: '/service', img: '../../../../assets/images/image-default.png', title: 'Produto 6', description: 'bla bla bla bla bla bla bla bla bla bla.'},
    { link: '/service', img: '../../../../assets/images/image-default.png', title: 'Produto 7', description: 'bla bla bla bla bla bla bla bla bla bla.'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
