import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import * as GameActions from './game.actions';
import { ActivatedRouteSnapshot } from "@angular/router";
import { of } from "rxjs";
import { map, switchMap, tap } from "rxjs/operators";
import { GameService } from "../services/game.service";
import { GamePartialState } from "./game.reducer";
import { GameStateModel } from "../../../../../../../libs/api-interfaces/src/lib/models/game-state.model";
import { GameComponent } from "../components/game/game.component";

@Injectable()
export class GameEffects {

  @Effect() gameComponentLoaded = this.s.navigation(GameComponent, {
    run: (a: ActivatedRouteSnapshot, state: GamePartialState) => {
      return of(a).pipe(
        switchMap(() => {
          return [
            GameActions.loadGameList(),
            GameActions.loadGameErrors()
          ]
        })
      )
    }
  });

  loadGameErrors$ = createEffect(() => this.actions$.pipe(
    ofType(GameActions.loadGameErrors),
    switchMap(() => this.gameService.getGameErrors().pipe(
      map((response: string) => {
        console.error(response);
        return GameActions.loadGameErrorsSuccess();
      })
      )
    ))
  );

  loadGameList$ = createEffect(() => this.actions$.pipe(
    ofType(GameActions.loadGameList),
    switchMap(() => this.gameService.getGameList().pipe(
      map((response: GameStateModel[]) => {
        console.log(response)
        return GameActions.loadGameListSuccess({ games: response });
      })
      )
    ))
  );

  createGame$ = createEffect(() => this.actions$.pipe(
    ofType(GameActions.createGame),
    map(({ playerName }) => {
      this.gameService.createGame(playerName);
      return GameActions.createGameSuccess();
    })
    )
  );

  joinToGame$ = createEffect(() => this.actions$.pipe(
    ofType(GameActions.joinToGame),
    map(({ gameId, playerName }) => {
      this.gameService.joinToGame(gameId, playerName);
      return GameActions.joinToGameSuccess();
    })
    )
  );

  backToGame$ = createEffect(() => this.actions$.pipe(
    ofType(GameActions.backToGame),
    map(({ playerName }) => {
      this.gameService.backToGame(playerName);
      return GameActions.backToGameSuccess();
    })
    )
  );

  startGame$ = createEffect(() => this.actions$.pipe(
    ofType(GameActions.startGame),
    map(() => {
      this.gameService.startGame();
      return GameActions.startGameSuccess();
    })
    )
  );

  removePlayer$ = createEffect(() => this.actions$.pipe(
    ofType(GameActions.removePlayer),
    tap(({ playerId }) => {
      this.gameService.removePlayer(playerId);
    })
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private s: DataPersistence<GamePartialState>,
    private gameService: GameService
  ) {
  }
}
