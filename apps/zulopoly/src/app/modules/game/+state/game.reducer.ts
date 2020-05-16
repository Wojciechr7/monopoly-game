import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as GameActions from './game.actions';
import { GameStateModel } from "../../../../../../../libs/api-interfaces/src/lib/models/game-state.model";

export const GAME_FEATURE_KEY = 'game';

export interface State extends EntityState<GameStateModel> {

}

export interface GamePartialState {
  readonly [GAME_FEATURE_KEY]: State;
}

export const gameAdapter: EntityAdapter<GameStateModel> = createEntityAdapter<GameStateModel>();

export const initialState: State = gameAdapter.getInitialState({});

const gameReducer = createReducer(
  initialState,
  on(GameActions.loadGameListSuccess, (state, { games }) => {
      return gameAdapter.addAll(games, state)
    }
  )
);

export function reducer(state: State | undefined, action: Action) {
  return gameReducer(state, action);
}
