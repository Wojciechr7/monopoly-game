import { Component, Input, OnInit } from '@angular/core';
import { BaseFieldModel } from '../../common/base-field.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'zulopoly-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input()
  field: BaseFieldModel;

  @Input()
  control: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
