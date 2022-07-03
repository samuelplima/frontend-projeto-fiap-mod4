import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html'
})
export class AboutPageComponent implements OnInit {

  public nameContent: string = "about-page__return-page";

  public icon: { href: string, img: string } = {
    href: '/home',
    img: 'keyboard_arrow_left'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
