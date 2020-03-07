import {createAction, props} from '@ngrx/store';
import {BoardEntity} from './board.models';

export const loadBoard = createAction('[Board] Load Board');

export const loadBoardSuccess = createAction(
  '[Board] Load Board Success',
  props<{ board: BoardEntity[] }>()
);

export const loadBoardFailure = createAction(
  '[Board] Load Board Failure',
  props<{ error: any }>()
);
