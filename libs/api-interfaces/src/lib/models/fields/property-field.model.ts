import {PropertyFieldBaseModel} from "./property-field-base.model";

export interface PropertyFieldModel extends PropertyFieldBaseModel<7> {
  tier: number;
  housePrice: number;
  hotelPrice: number;
}
