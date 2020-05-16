import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromGame from './game.reducer';
import * as GameSelectors from './game.selectors';
import * as GameActions from './game.actions';

@Injectable()
export class GameFacade {
  allGames$ = this.store.pipe(select(GameSelectors.getGameList));

  constructor(private store: Store<fromGame.GamePartialState>) {
  }

  createGame(playerName: string) {
    this.store.dispatch(GameActions.createGame({ playerName }));
  }

  joinToGame(gameId: string, playerName: string) {
    this.store.dispatch(GameActions.joinToGame({ gameId, playerName }));
  }

  backToGame(playerName: string) {
    this.store.dispatch(GameActions.backToGame({ playerName }));
  }

  startGame() {
    this.store.dispatch(GameActions.startGame());
  }

  removePlayer(playerId: string) {
    this.store.dispatch(GameActions.removePlayer({ playerId }));
  }

  /*  getGameList() {
      this.store.dispatch(GameActions.loadGameList());
    }*/

}
