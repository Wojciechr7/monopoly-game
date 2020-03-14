import {Component, Input, OnInit} from '@angular/core';
import {FieldBaseModel} from "../../../../../../../../libs/api-interfaces/src/lib/models/fields/field-base.model";

@Component({
  selector: 'zulopoly-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  @Input() field: FieldBaseModel;

  constructor() {
  }

  ngOnInit(): void {
  }

  test() {
    console.log(this.field);
  }

}
