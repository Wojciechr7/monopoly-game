import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as BoardActions from './board.actions';
import { BoardEntity } from './board.models';
import { BOARD_SIZE } from "../../game/helpers/game-settings";
import { FieldBaseModel } from "../../../../../../../libs/api-interfaces/src/lib/models/fields/field-base.model";
import { GameStateModel } from "../../../../../../../libs/api-interfaces/src/lib/models/game-state.model";

export const BOARD_FEATURE_KEY = 'board';

export interface State extends EntityState<BoardEntity> {
  boardSize: number;
  boardFields: FieldBaseModel[];
  leftDiceRoll: number;
  rightDiceRoll: number;
  gameState: GameStateModel;
  playerName: string;
}

export interface BoardPartialState {
  readonly [BOARD_FEATURE_KEY]: State;
}

export const boardAdapter: EntityAdapter<BoardEntity> = createEntityAdapter<BoardEntity>();

export const initialState: State = boardAdapter.getInitialState({
  boardSize: BOARD_SIZE,
  boardFields: [],
  leftDiceRoll: 1,
  rightDiceRoll: 1,
  gameState: null,
  playerName: 'test'
});

const boardReducer = createReducer(
  initialState,
  on(BoardActions.BoardComponentLoaded, state => {
      return {
        ...state,
        boardFields: [],
        leftDiceRoll: 1,
        rightDiceRoll: 1,
        gameState: null,
        playerName: 'test'
      }
    }
  ),
  on(BoardActions.loadFieldsSuccess, (state, { fields }) => {
      return {
        ...state,
        boardFields: [...fields.other, ...fields.powerPlantAndWaterworks, ...fields.property, ...fields.railways, ...fields.tax]
      }
    }
  ),
  on(BoardActions.loadGameSuccess, (state, { game }) => {
      return {
        ...state,
        gameState: game
      }
    }
  )
);

export function reducer(state: State | undefined, action: Action) {
  return boardReducer(state, action);
}
