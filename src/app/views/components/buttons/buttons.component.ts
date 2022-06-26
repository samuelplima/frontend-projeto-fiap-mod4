import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent implements OnInit {

  @Input() links: any;

  constructor() { }

  ngOnInit(): void {
  }

}
