import {createFeatureSelector, createSelector} from '@ngrx/store';
import {BOARD_FEATURE_KEY, boardAdapter, BoardPartialState, State} from './board.reducer';

// Lookup the 'Board' feature state managed by NgRx
export const getBoardState = createFeatureSelector<BoardPartialState, State>(
  BOARD_FEATURE_KEY
);

const {selectAll, selectEntities} = boardAdapter.getSelectors();

export const getBoardFields = createSelector(getBoardState, (state: State) => state.boardFields);

/*export const getBoardLoaded = createSelector(
  getBoardState,
  (state: State) => state.loaded
);

export const getBoardError = createSelector(
  getBoardState,
  (state: State) => state.error
);

export const getAllBoard = createSelector(
  getBoardState,
  (state: State) => selectAll(state)
);

export const getBoardEntities = createSelector(
  getBoardState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getBoardState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getBoardEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);*/
