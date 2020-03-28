import {FieldSideEnum} from "../../../../../../../libs/api-interfaces/src/lib/enums/fields/field-side.enum";

export function getFieldPosition(fieldIndex: number): FieldSideEnum {
  switch (true) {

    case (fieldIndex > 20 && fieldIndex < 32):
      return FieldSideEnum.Top;

    case (fieldIndex > 31):
      return FieldSideEnum.Right;

    case (fieldIndex > 0 && fieldIndex < 12):
      return FieldSideEnum.Bottom;

    case (fieldIndex > 11 && fieldIndex < 21):
      return FieldSideEnum.Left;

  }
}
