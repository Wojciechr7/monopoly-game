import {Component, Input, OnInit} from '@angular/core';
import {FieldBaseModel} from "../../../../../../../../../../libs/api-interfaces/src/lib/models/fields/field-base.model";
import {FieldBase} from "../base/field-base";

@Component({
  selector: 'zulopoly-power-plant-waterworks',
  templateUrl: './power-plant-waterworks.component.html',
  styleUrls: ['./power-plant-waterworks.component.scss']
})
export class PowerPlantWaterworksComponent extends FieldBase implements OnInit {

  @Input() field: FieldBaseModel;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
