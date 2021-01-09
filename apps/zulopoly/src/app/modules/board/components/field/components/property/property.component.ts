import {Component, Input, OnInit} from '@angular/core';
import {PropertyFieldModel} from "../../../../../../../../../../libs/api-interfaces/src/lib/models/fields/property-field.model";
import {FieldBase} from "../base/field-base";

@Component({
  selector: 'zulopoly-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent extends FieldBase implements OnInit {

  @Input() field: PropertyFieldModel;

  constructor() {
    super();
  }

  ngOnInit(): void {
    /*    console.log(this.field)*/
  }

}
