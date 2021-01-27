import { Component, OnInit } from '@angular/core';
import { BaseField } from '../../common/base-field';
import { InputFieldModel, InputFieldType } from '../../fields-models/input-field.model';
import { FieldTypes } from '../../common/field-types';

@Component({
  selector: 'zulopoly-input-filed',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent extends BaseField<InputFieldModel> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  getType(type: InputFieldType): string {
    switch (type) {
      case InputFieldType.Number: return 'number';
      case InputFieldType.Password: return 'password'
      case InputFieldType.Text: return 'text';
      default: return 'text';
    }
  }

}
