import {Component, Input, OnInit} from '@angular/core';
import {FieldBaseModel} from "../../../../../../../../../../libs/api-interfaces/src/lib/models/fields/field-base.model";
import {FieldBase} from "../base/field-base";

@Component({
  selector: 'zulopoly-jail',
  templateUrl: './jail.component.html',
  styleUrls: ['./jail.component.scss']
})
export class JailComponent extends FieldBase implements OnInit {

  @Input() field: FieldBaseModel;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
