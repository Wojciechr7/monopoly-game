import {Component, Input, OnInit} from '@angular/core';
import {FieldBaseModel} from "../../../../../../../../../../libs/api-interfaces/src/lib/models/fields/field-base.model";
import {FieldBase} from "../base/field-base";

@Component({
  selector: 'zulopoly-railways',
  templateUrl: './railways.component.html',
  styleUrls: ['./railways.component.scss']
})
export class RailwaysComponent extends FieldBase implements OnInit {

  @Input() field: FieldBaseModel;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
