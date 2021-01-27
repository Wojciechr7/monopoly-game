import { BaseFieldModel, IBaseFieldModel } from '../common/base-field.model';
import { FieldTypes } from '../common/field-types';

export class InputFieldModel extends BaseFieldModel implements IInputFieldModel {

  fieldType: FieldTypes = FieldTypes.Input;

  type: InputFieldType;


  constructor(field: IInputFieldModel) {
    super(field);
  }
}


export interface IInputFieldModel extends IBaseFieldModel {
  type: InputFieldType
}

export enum InputFieldType {
  Text,
  Password,
  Number
}
