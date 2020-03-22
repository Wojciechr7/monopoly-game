import {createFeatureSelector, createSelector} from '@ngrx/store';
import {BOARD_FEATURE_KEY, boardAdapter, BoardPartialState, State} from './board.reducer';
import {FieldBaseModel} from "../../../../../../../libs/api-interfaces/src/lib/models/fields/field-base.model";

// Lookup the 'Board' feature state managed by NgRx
export const getBoardState = createFeatureSelector<BoardPartialState, State>(
  BOARD_FEATURE_KEY
);

const {selectAll, selectEntities} = boardAdapter.getSelectors();

/*export const getBoardFields = createSelector(getBoardState, (state: State) => state.boardFields);*/

export const getTopBoardFields = createSelector(getBoardState, (state: State) => {
  return sortFieldsByIndex(state.boardFields.filter((field: FieldBaseModel) => field.index > 20 && field.index < 32))
});

export const getRightBoardFields = createSelector(getBoardState, (state: State) => {
  return sortFieldsByIndex(state.boardFields.filter((field: FieldBaseModel) => field.index > 31))
});

export const getBottomBoardFields = createSelector(getBoardState, (state: State) => {
  return sortFieldsByIndex(state.boardFields.filter((field: FieldBaseModel) => field.index > 0 && field.index < 12)).reverse()
});

export const getLeftBoardFields = createSelector(getBoardState, (state: State) => {
  return sortFieldsByIndex(state.boardFields.filter((field: FieldBaseModel) => field.index > 11 && field.index < 21)).reverse()
});

export const getCenterField = createSelector(getBoardState, (state: State) => state.boardFields.find((field: FieldBaseModel) => {
  return field.index === 0;
}));

export function sortFieldsByIndex(fields: FieldBaseModel[]) {
  return fields.sort((a, b) => (a.index > b.index) ? 1 : -1)
}

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
