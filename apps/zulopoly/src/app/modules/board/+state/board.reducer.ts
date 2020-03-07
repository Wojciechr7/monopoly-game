import {Action, createReducer, on} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

import * as BoardActions from './board.actions';
import {BoardEntity} from './board.models';

export const BOARD_FEATURE_KEY = 'board';

export interface State extends EntityState<BoardEntity> {
  selectedId?: string | number; // which Board record has been selected
  loaded: boolean; // has the Board list been loaded
  error?: string | null; // last none error (if any)
}

export interface BoardPartialState {
  readonly [BOARD_FEATURE_KEY]: State;
}

export const boardAdapter: EntityAdapter<BoardEntity> = createEntityAdapter<BoardEntity>();

export const initialState: State = boardAdapter.getInitialState({
  // set initial required properties
  loaded: false
});

const boardReducer = createReducer(
  initialState,
  on(BoardActions.loadBoard, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(BoardActions.loadBoardSuccess, (state, {board}) =>
    boardAdapter.addAll(board, {...state, loaded: true})
  ),
  on(BoardActions.loadBoardFailure, (state, {error}) => ({...state, error}))
);

export function reducer(state: State | undefined, action: Action) {
  return boardReducer(state, action);
}
