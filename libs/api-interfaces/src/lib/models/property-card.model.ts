import { FieldTypeEnum } from "../enums/fields/field-type.enum";

export interface PropertyCardModel {
  index: number;
  type: FieldTypeEnum;
  owner: string;
  hasHotel: boolean;
  numberOfHouses: number;
  title: string;
  tier: number;
  housePrice: number;
  hotelPrice: number;
  buyPrice: number;
  pledgePrice: number;
  rent: number[];
}
