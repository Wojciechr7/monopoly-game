import {Injectable} from '@angular/core';

import {Action, select, Store} from '@ngrx/store';

import * as fromGame from './game.reducer';
import * as GameSelectors from './game.selectors';

@Injectable()
export class GameFacade {
  loaded$ = this.store.pipe(select(GameSelectors.getGameLoaded));
  allGame$ = this.store.pipe(select(GameSelectors.getAllGame));
  selectedGame$ = this.store.pipe(select(GameSelectors.getSelected));

  constructor(private store: Store<fromGame.GamePartialState>) {
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
