import {Component, Input, OnInit} from '@angular/core';
import {FieldBaseModel} from "../../../../../../../../../../libs/api-interfaces/src/lib/models/fields/field-base.model";
import {FieldBase} from "../base/field-base";

@Component({
  selector: 'zulopoly-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.scss']
})
export class TaxComponent extends FieldBase implements OnInit {

  @Input() field: FieldBaseModel;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
