import { FieldTypes } from './field-types';
import { ValidateFn } from 'codelyzer/walkerFactory/walkerFn';
import { ValidatorFn } from '@angular/forms';

export abstract class BaseFieldModel implements IBaseFieldModel {

  abstract fieldType: FieldTypes;

  name: string;
  placeholder: string;
  validators: ValidatorFn[];
  errorMes: { [key: string]: string }

  protected constructor(
    field: IBaseFieldModel
  ) {
    for (let fieldKey in field) {
      this[fieldKey] = field[fieldKey];
    }
  }

}


export interface IBaseFieldModel {
  name: string;
  placeholder: string;
  validators?: ValidatorFn[];
  errorMes?: { [key: string]: string }
}
