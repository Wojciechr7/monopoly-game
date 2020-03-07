import {createAction} from '@ngrx/store';

export const BoardComponentLoaded = createAction('[Board] Board Component Loaded');

/*export const loadBoardSuccess = createAction(
  '[Board] Load Board Success',
  props<{ board: BoardEntity[] }>()
);

export const loadBoardFailure = createAction(
  '[Board] Load Board Failure',
  props<{ error: any }>()
);*/
