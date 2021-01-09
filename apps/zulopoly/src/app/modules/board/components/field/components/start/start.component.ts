import {Component, Input, OnInit} from '@angular/core';
import {FieldBaseModel} from "../../../../../../../../../../libs/api-interfaces/src/lib/models/fields/field-base.model";
import {FieldBase} from "../base/field-base";

@Component({
  selector: 'zulopoly-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent extends FieldBase implements OnInit {

  @Input() field: FieldBaseModel;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
