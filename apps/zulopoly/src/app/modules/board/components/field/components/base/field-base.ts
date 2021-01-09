import {FieldSideEnum} from "../../../../../../../../../../libs/api-interfaces/src/lib/enums/fields/field-side.enum";
import {getFieldPosition} from "../../../../../game/helpers/get-field-position";

export abstract class FieldBase {

  protected constructor() {
  }

  getPositionClass(fieldIndex: number): string {
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

}
