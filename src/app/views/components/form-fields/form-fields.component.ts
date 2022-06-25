import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html'
})
export class FormFieldsComponent implements OnInit {

  @Input() field: any;

  constructor() { }

  ngOnInit(): void {
  }

}
