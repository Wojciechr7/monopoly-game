import {createAction, props} from '@ngrx/store';
import {GameEntity} from './game.models';

export const loadGame = createAction('[Game] Load Game');

export const loadGameSuccess = createAction(
  '[Game] Load Game Success',
  props<{ game: GameEntity[] }>()
);

export const loadGameFailure = createAction(
  '[Game] Load Game Failure',
  props<{ error: any }>()
);
