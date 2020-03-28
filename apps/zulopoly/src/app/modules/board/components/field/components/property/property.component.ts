import {Component, Input, OnInit} from '@angular/core';
import {PropertyFieldModel} from "../../../../../../../../../../libs/api-interfaces/src/lib/models/fields/property-field.model";
import {getFieldPosition} from "../../../../../game/helpers/get-field-position";
import {FieldSideEnum} from "../../../../../../../../../../libs/api-interfaces/src/lib/enums/fields/field-side.enum";

@Component({
  selector: 'zulopoly-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  @Input() field: PropertyFieldModel;

  constructor() {
  }

  getFieldPosition(fieldIndex: number): string {
    switch (getFieldPosition(fieldIndex)) {

      case FieldSideEnum.Top:
        return 'container--top';

      case FieldSideEnum.Right:
        return 'container--right';

      case FieldSideEnum.Bottom:
        return 'container--bottom';

      case FieldSideEnum.Left:
        return 'container--left';

    }
  }

  ngOnInit(): void {
    console.log(this.field)
  }

}
