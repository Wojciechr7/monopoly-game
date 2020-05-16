import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GAME_FEATURE_KEY, gameAdapter, GamePartialState, State } from './game.reducer';

const { selectAll, selectEntities } = gameAdapter.getSelectors();

export const getGameState = createFeatureSelector<GamePartialState, State>(GAME_FEATURE_KEY);

export const getGameList = createSelector(getGameState, (state: State) => selectAll(state));
