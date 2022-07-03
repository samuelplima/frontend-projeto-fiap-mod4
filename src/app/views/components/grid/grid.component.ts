import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html'
})
export class GridComponent implements OnInit {

  @Input() items: any;

  constructor() { }

  ngOnInit(): void {
  }

}
