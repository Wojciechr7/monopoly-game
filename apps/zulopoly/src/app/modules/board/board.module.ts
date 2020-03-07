import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BoardRoutingModule} from './board-routing.module';
import {BoardComponent} from './components/board/board.component';
import {FieldComponent} from './components/field/field.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import * as fromBoard from './+state/board.reducer';
import {BoardEffects} from './+state/board.effects';

@NgModule({
  declarations: [BoardComponent, FieldComponent],
  imports: [
    CommonModule,
    BoardRoutingModule,
    StoreModule.forFeature(fromBoard.BOARD_FEATURE_KEY, fromBoard.reducer),
    EffectsModule.forFeature([BoardEffects])
  ]
})
export class BoardModule {
}
