import { FieldBaseModel } from '../../../../api-interfaces/src/lib/models/fields/field-base.model';
import { BaseFieldModel } from './base-field.model';

export interface FormModel {
  fields: BaseFieldModel[];
}
