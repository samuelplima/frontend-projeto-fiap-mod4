import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public links: Array<{ textLink: string, href: string }> = [
    { textLink: 'Sobre a Clínica', href: '/about' },
    { textLink: 'Nossos Serviços', href: '/service' },
    { textLink: 'Agende um Horário', href: '/schedule' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
