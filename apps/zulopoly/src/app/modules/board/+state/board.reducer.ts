import {Action, createReducer, on} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import * as BoardActions from './board.actions';
import {BoardEntity} from './board.models';
import {BOARD_SIZE} from "../../game/helpers/game-settings";
import {BoardFieldModel} from "../models/board-field.model";

export const BOARD_FEATURE_KEY = 'board';

export interface State extends EntityState<BoardEntity> {
  boardSize: number;
  boardFields: BoardFieldModel[][];
}

export interface BoardPartialState {
  readonly [BOARD_FEATURE_KEY]: State;
}

export const boardAdapter: EntityAdapter<BoardEntity> = createEntityAdapter<BoardEntity>();

export const initialState: State = boardAdapter.getInitialState({
  boardSize: BOARD_SIZE,
  boardFields: [...Array(BOARD_SIZE)].map(() => [...Array(BOARD_SIZE)])
});

const boardReducer = createReducer(
  initialState,
  on(BoardActions.BoardComponentLoaded, state => {
      let index = 0;
      console.log(1112);
      return {
        ...state,
        boardFields: state.boardFields.map((xField: BoardFieldModel[], x: number) => {
          return xField.map((yField: BoardFieldModel, y: number) => {
            return {...yField, index: index++, x, y}
          })
        })
      }
    }
  ),
  /*  on(BoardActions.loadBoardSuccess, (state, { board }) =>
      boardAdapter.addAll(board, { ...state, loaded: true })
    ),
    on(BoardActions.loadBoardFailure, (state, { error }) => ({ ...state, error }))*/
);

export function reducer(state: State | undefined, action: Action) {
  return boardReducer(state, action);
}


/*
boardFields: state.boardFields.map((field: BoardFieldModel[], x: number) => {
  return field.map((field: BoardFieldModel, y: number) => {
    return {
      ...field,

    }
  })
})*/
