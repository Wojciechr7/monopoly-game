import {NgModule} from '@angular/core';
import {BoardRoutingModule} from './board-routing.module';
import {BoardComponent} from './components/board/board.component';
import {FieldComponent} from './components/field/field.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import * as fromBoard from './+state/board.reducer';
import {BoardEffects} from './+state/board.effects';
import {BoardFacade} from './+state/board.facade';
import {PropertyComponent} from './components/field/components/property/property.component';
import {StartComponent} from './components/field/components/start/start.component';
import {JailComponent} from './components/field/components/jail/jail.component';
import {GoToJailComponent} from './components/field/components/go-to-jail/go-to-jail.component';
import {ParkingComponent} from './components/field/components/parking/parking.component';
import {RailwaysComponent} from './components/field/components/railways/railways.component';
import {PowerPlantWaterworksComponent} from './components/field/components/power-plant-waterworks/power-plant-waterworks.component';
import {TaxComponent} from './components/field/components/tax/tax.component';
import {ChanceComponent} from './components/field/components/chance/chance.component';
import {CommunityChestComponent} from './components/field/components/community-chest/community-chest.component';
import {CenterComponent} from './components/field/components/center/center.component';
import {DynamicFieldDirective} from "./directives/dynamic-field.directive";
import {BaseModule} from "@zulopoly/base";
import {DiceComponent} from './components/dice/dice.component';

@NgModule({
  declarations: [BoardComponent, FieldComponent, PropertyComponent, StartComponent, JailComponent, GoToJailComponent, ParkingComponent, RailwaysComponent, PowerPlantWaterworksComponent, TaxComponent, ChanceComponent, CommunityChestComponent, CenterComponent, DynamicFieldDirective, DiceComponent],
  imports: [
    BaseModule,
    BoardRoutingModule,
    StoreModule.forFeature(fromBoard.BOARD_FEATURE_KEY, fromBoard.reducer),
    EffectsModule.forFeature([BoardEffects])
  ],
  providers: [BoardFacade]
})
export class BoardModule {
}
