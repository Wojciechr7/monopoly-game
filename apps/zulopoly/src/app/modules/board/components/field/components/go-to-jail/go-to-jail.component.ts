import {Component, Input, OnInit} from '@angular/core';
import {FieldBase} from "../base/field-base";
import {FieldBaseModel} from "../../../../../../../../../../libs/api-interfaces/src/lib/models/fields/field-base.model";

@Component({
  selector: 'zulopoly-go-to-jail',
  templateUrl: './go-to-jail.component.html',
  styleUrls: ['./go-to-jail.component.scss']
})
export class GoToJailComponent extends FieldBase implements OnInit {

  @Input() field: FieldBaseModel;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
