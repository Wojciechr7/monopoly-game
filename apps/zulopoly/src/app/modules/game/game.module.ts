import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameRoutingModule} from './game-routing.module';
import {GameComponent} from './components/game/game.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import * as fromGame from './+state/game.reducer';
import {GameEffects} from './+state/game.effects';
import {GameFacade} from './+state/game.facade';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GameComponent, ChatComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    StoreModule.forFeature(fromGame.GAME_FEATURE_KEY, fromGame.reducer),
    EffectsModule.forFeature([GameEffects]),
    FormsModule
  ],
  providers: [GameFacade]
})
export class GameModule {
}
