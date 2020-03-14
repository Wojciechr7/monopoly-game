import {FixedLengthArray} from "../fixed-array-length.type";
import {FieldBaseModel} from "./field-base.model";

export interface PropertyFieldBaseModel<T extends number> extends FieldBaseModel {
  buyPrice: number;
  pledgePrice: number;
  rent: FixedLengthArray<number, T>;
}
