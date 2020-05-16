import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as BoardActions from './board.actions';
import { BoardEntity } from './board.models';
import { BOARD_SIZE } from "../../game/helpers/game-settings";
import { FieldBaseModel } from "../../../../../../../libs/api-interfaces/src/lib/models/fields/field-base.model";
import { GameStateModel } from "../../../../../../../libs/api-interfaces/src/lib/models/game-state.model";
import { DiceRolledModel } from "../../../../../../../libs/api-interfaces/src/lib/models/dice-rolled.model";

export const BOARD_FEATURE_KEY = 'board';

export interface State extends EntityState<BoardEntity> {
  boardSize: number;
  boardFields: FieldBaseModel[];
  diceRoll: DiceRolledModel;
  gameState: GameStateModel;
}

export interface BoardPartialState {
  readonly [BOARD_FEATURE_KEY]: State;
}

export const boardAdapter: EntityAdapter<BoardEntity> = createEntityAdapter<BoardEntity>();

export const initialState: State = boardAdapter.getInitialState({
  boardSize: BOARD_SIZE,
  boardFields: [],
  diceRoll: null,
  gameState: null
});

const boardReducer = createReducer(
  initialState,
  on(BoardActions.BoardComponentLoaded, (state: State) => {
      return {
        ...state,
        boardFields: [],
        diceRoll: null,
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
  ),
  on(BoardActions.leaveGameSuccess, (state) => {
      return {
        ...state,
        gameState: null
      }
    }
  ),
  on(BoardActions.loadDiceRolledSuccess, (state, { dice }) => {
      return {
        ...state,
        leftDiceRoll: dice.leftDice,
        rightDiceRoll: dice.rightDice
      }
    }
  )
);

export function reducer(state: State | undefined, action: Action) {
  return boardReducer(state, action);
}
