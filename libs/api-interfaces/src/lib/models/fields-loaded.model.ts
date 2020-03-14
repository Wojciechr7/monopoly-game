import {PropertyFieldModel} from "./fields/property-field.model";
import {PowerPlantWaterworksModel} from "./fields/power-plant-waterworks.model";
import {RailwaysFieldModel} from "./fields/railways-field.model";
import {TaxFieldModel} from "./fields/tax-field.model";
import {FieldBaseModel} from "./fields/field-base.model";

export interface FieldsLoadedModel {
  property: PropertyFieldModel[];
  powerPlantAndWaterworks: PowerPlantWaterworksModel[];
  railways: RailwaysFieldModel[];
  tax: TaxFieldModel[];
  other: FieldBaseModel[];
}
