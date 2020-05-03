import { createAction, props } from '@ngrx/store';
import { FieldsLoadedModel } from "../../../../../../../libs/api-interfaces/src/lib/models/fields-loaded.model";
import { GameStateModel } from "../../../../../../../libs/api-interfaces/src/lib/models/game-state.model";

export const BoardComponentLoaded = createAction('[Board] Board Component Loaded');

export const loadFields = createAction('[Board] Load Fields');

export const loadFieldsSuccess = createAction(
  '[Board] Load Fields Success',
  props<{ fields: FieldsLoadedModel }>()
);

export const loadFieldsFailure = createAction(
  '[Board] Load Fields Failure',
  props<{ error: any }>()
);

export const rollDice = createAction('[Board Dice] Roll Dice');

export const rollDiceSuccess = createAction('[Board Dice] Roll Dice Success');

export const rollDiceFailure = createAction(
  '[Board Dice] Roll Dice Failure',
  props<{ error: any }>()
);

export const loadGame = createAction('[Board] Load Game');

export const loadGameSuccess = createAction(
  '[Board] Load Game Success',
  props<{ game: GameStateModel }>()
);

export const createGame = createAction('[Board] Create Game');

export const createGameSuccess = createAction('[Board] Create Game Success');

