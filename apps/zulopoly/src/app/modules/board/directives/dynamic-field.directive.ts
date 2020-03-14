import {ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, ViewContainerRef} from '@angular/core';
import {FieldBaseModel} from "../../../../../../../libs/api-interfaces/src/lib/models/fields/field-base.model";
import {FieldTypeEnum} from "../../../../../../../libs/api-interfaces/src/lib/enums/fields/field-type.enum";
import {CenterComponent} from "../components/field/components/center/center.component";
import {ChanceComponent} from "../components/field/components/chance/chance.component";
import {CommunityChestComponent} from "../components/field/components/community-chest/community-chest.component";
import {GoToJailComponent} from "../components/field/components/go-to-jail/go-to-jail.component";
import {JailComponent} from "../components/field/components/jail/jail.component";
import {ParkingComponent} from "../components/field/components/parking/parking.component";
import {PowerPlantWaterworksComponent} from "../components/field/components/power-plant-waterworks/power-plant-waterworks.component";
import {PropertyComponent} from "../components/field/components/property/property.component";
import {RailwaysComponent} from "../components/field/components/railways/railways.component";
import {StartComponent} from "../components/field/components/start/start.component";
import {TaxComponent} from "../components/field/components/tax/tax.component";

@Directive({
  selector: '[zulopolyDynamicField]'
})
export class DynamicFieldDirective implements OnInit {

  @Input() field: FieldBaseModel;

  component: ComponentRef<any>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {
  }

  ngOnInit() {
    const component = this.getComponentByFieldType(this.field);
    const factory = this.resolver.resolveComponentFactory<any>(component);

    this.component = this.container.createComponent(factory);
    this.component.instance.field = this.field;
  }

  private getComponentByFieldType(field: FieldBaseModel) {

    switch (field.type) {

      case FieldTypeEnum.Center:
        return CenterComponent;

      case FieldTypeEnum.Chance:
        return ChanceComponent;

      case FieldTypeEnum.CommunityChest:
        return CommunityChestComponent;

      case FieldTypeEnum.GoToJail:
        return GoToJailComponent;

      case FieldTypeEnum.Jail:
        return JailComponent;

      case FieldTypeEnum.Parking:
        return ParkingComponent;

      case FieldTypeEnum.PowerPlantAndWaterworks:
        return PowerPlantWaterworksComponent;

      case FieldTypeEnum.Property:
        return PropertyComponent;

      case FieldTypeEnum.Railways:
        return RailwaysComponent;

      case FieldTypeEnum.Start:
        return StartComponent;

      case FieldTypeEnum.Tax:
        return TaxComponent;

      default:
        return null;
    }
  }
}
