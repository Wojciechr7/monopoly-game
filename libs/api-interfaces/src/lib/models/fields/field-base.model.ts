import {FieldTypeEnum} from "../../enums/fields/field-type.enum";

export interface FieldBaseModel {
  index: number;
  type: FieldTypeEnum;
  title: string;
}
