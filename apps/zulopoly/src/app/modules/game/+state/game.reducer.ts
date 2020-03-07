import {Action, createReducer, on} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

import * as GameActions from './game.actions';
import {GameEntity} from './game.models';

export const GAME_FEATURE_KEY = 'game';

export interface State extends EntityState<GameEntity> {
  selectedId?: string | number; // which Game record has been selected
  loaded: boolean; // has the Game list been loaded
  error?: string | null; // last none error (if any)
}

export interface GamePartialState {
  readonly [GAME_FEATURE_KEY]: State;
}

export const gameAdapter: EntityAdapter<GameEntity> = createEntityAdapter<GameEntity>();

export const initialState: State = gameAdapter.getInitialState({
  // set initial required properties
  loaded: false
});

const gameReducer = createReducer(
  initialState,
  on(GameActions.loadGame, state => ({...state, loaded: false, error: null})),
  on(GameActions.loadGameSuccess, (state, {game}) =>
    gameAdapter.addAll(game, {...state, loaded: true})
  ),
  on(GameActions.loadGameFailure, (state, {error}) => ({...state, error}))
);

export function reducer(state: State | undefined, action: Action) {
  return gameReducer(state, action);
}
