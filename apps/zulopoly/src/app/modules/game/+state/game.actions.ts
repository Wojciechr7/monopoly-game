import { createAction, props } from '@ngrx/store';
import { GameStateModel } from "../../../../../../../libs/api-interfaces/src/lib/models/game-state.model";

export const loadGameErrors = createAction('[Game] Load Game Errors');

export const loadGameErrorsSuccess = createAction('[Game] Load Game Errors Success');

export const loadGameList = createAction('[Game] Load Game List');

export const loadGameListSuccess = createAction(
  '[Game] Load Game List Success',
  props<{ games: GameStateModel[] }>()
);

export const createGame = createAction(
  '[Game] Create Game',
  props<{ playerName: string }>()
);

export const createGameSuccess = createAction('[Game] Create Game Success');

export const joinToGame = createAction(
  '[Game] Join To Game',
  props<{ gameId: string, playerName: string }>()
);

export const joinToGameSuccess = createAction('[Game] Join To Game Success');

export const backToGame = createAction(
  '[Game] Back To Game',
  props<{ playerName: string }>()
);

export const backToGameSuccess = createAction('[Game] Back To Game Success');

export const startGame = createAction('[Game] Start Game');

export const startGameSuccess = createAction('[Game] Start Game Success');

export const removePlayer = createAction(
  '[Game] Remove Player',
  props<{ playerId: string }>()
);

export const loadClientId = createAction('[Game] Load Client Id');

export const loadClientIdSuccess = createAction(
  '[Game] Load Client Id Success',
  props<{ clientId: string }>()
);
