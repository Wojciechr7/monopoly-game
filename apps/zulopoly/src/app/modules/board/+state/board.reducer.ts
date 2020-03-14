import {Action, createReducer, on} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import * as BoardActions from './board.actions';
import {BoardEntity} from './board.models';
import {BOARD_SIZE} from "../../game/helpers/game-settings";
import {FieldBaseModel} from "../../../../../../../libs/api-interfaces/src/lib/models/fields/field-base.model";

export const BOARD_FEATURE_KEY = 'board';

export interface State extends EntityState<BoardEntity> {
  boardSize: number;
  /*  boardFields: BoardFieldModel[][];*/
  boardFields: FieldBaseModel[];
}

export interface BoardPartialState {
  readonly [BOARD_FEATURE_KEY]: State;
}

export const boardAdapter: EntityAdapter<BoardEntity> = createEntityAdapter<BoardEntity>();

export const initialState: State = boardAdapter.getInitialState({
  boardSize: BOARD_SIZE,
  /*  boardFields: [...Array(BOARD_SIZE)].map(() => [...Array(BOARD_SIZE)])*/
  boardFields: []
});

const boardReducer = createReducer(
  initialState,
  on(BoardActions.BoardComponentLoaded, state => {
      /*      let index = 0;*/
      return {
        ...state,
        /*        boardFields: state.boardFields.map((xField: BoardFieldModel[]) => {
                  return xField.map((yField: BoardFieldModel) => {
                    return {...yField, index: index++}
                  })
                })*/
      }
    }
  ),
  on(BoardActions.loadFieldsSuccess, (state, {fields}) => {
      return {
        ...state,
        boardFields: [...fields.other, ...fields.powerPlantAndWaterworks, ...fields.property, ...fields.railways, ...fields.tax]
      }
    }
  )
);

export function reducer(state: State | undefined, action: Action) {
  return boardReducer(state, action);
}

/*export function getFieldType(index: number): FieldTypeEnum {
  switch(index) {
    case 1:
      return 1
  }


}*/
// osobnme componenty na kazde pole, srodek jako 1 component, dyrektywa zwracajaca component zaleznie od indeksu

/*
boardFields: state.boardFields.map((field: BoardFieldModel[], x: number) => {
  return field.map((field: BoardFieldModel, y: number) => {
    return {
      ...field,

    }
  })
})*/
