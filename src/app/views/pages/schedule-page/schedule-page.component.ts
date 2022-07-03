import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-page',
  templateUrl: './schedule-page.component.html'
})
export class SchedulePageComponent implements OnInit {

  public scheduleHour: Array<{ type: string, name: string, placeholder: string, textLabel: string }> = [
    { type: 'text', name: 'schedule-page__service', placeholder: 'Nome do Procedimento', textLabel: 'Procedimento desejado' },
    { type: 'date', name: 'schedule-page__date', placeholder: 'dd/mm/aaaa', textLabel: 'Para qual dia?' },
    { type: 'time', name: 'schedule-page__time', placeholder: '00:00', textLabel: 'Qual horário é o melhor para você?' },
  ];

  public nameContent: string = "schedule-page__return-page";

  public icon: { href: string, img: string } = {
    href: '/home',
    img: 'keyboard_arrow_left'
  };

  public scheduled: Array<{ textLink: string, href: string }> = [
    { textLink: 'Confirmar Agendamento', href: '/' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
