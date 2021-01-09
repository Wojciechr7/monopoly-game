import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BOARD_FEATURE_KEY, boardAdapter, BoardPartialState, State } from './board.reducer';
import { FieldBaseModel } from "../../../../../../../libs/api-interfaces/src/lib/models/fields/field-base.model";
import { getFieldPosition } from "../../game/helpers/get-field-position";
import { FieldSideEnum } from "../../../../../../../libs/api-interfaces/src/lib/enums/fields/field-side.enum";

export const getBoardState = createFeatureSelector<BoardPartialState, State>(BOARD_FEATURE_KEY);

const { selectAll, selectEntities } = boardAdapter.getSelectors();

export const getTopBoardFields = createSelector(getBoardState, (state: State) => {
  return sortFieldsByIndex(state.boardFields.filter((field: FieldBaseModel) => getFieldPosition(field.index) === FieldSideEnum.Top))
});

export const getRightBoardFields = createSelector(getBoardState, (state: State) => {
  return sortFieldsByIndex(state.boardFields.filter((field: FieldBaseModel) => getFieldPosition(field.index) === FieldSideEnum.Right))
});

export const getBottomBoardFields = createSelector(getBoardState, (state: State) => {
  return sortFieldsByIndex(state.boardFields.filter((field: FieldBaseModel) => getFieldPosition(field.index) === FieldSideEnum.Bottom)).reverse()
});

export const getLeftBoardFields = createSelector(getBoardState, (state: State) => {
  return sortFieldsByIndex(state.boardFields.filter((field: FieldBaseModel) => getFieldPosition(field.index) === FieldSideEnum.Left)).reverse()
});

export const getCenterField = createSelector(getBoardState, (state: State) => state.boardFields.find((field: FieldBaseModel) => {
  return field.index === 0;
}));

export const getDice = createSelector(getBoardState, (state: State) => state.diceRoll);

export const getGameState = createSelector(getBoardState, (state: State) => state.gameState);

export function sortFieldsByIndex(fields: FieldBaseModel[]) {
  return fields.sort((a, b) => (a.index > b.index) ? 1 : -1)
}
