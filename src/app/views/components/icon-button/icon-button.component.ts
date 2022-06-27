import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html'
})
export class IconButtonComponent implements OnInit {

  @Input() icons: any;

  constructor() { }

  ngOnInit(): void {
  }

}
