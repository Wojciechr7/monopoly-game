import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { BoardPartialState } from './board.reducer';
import * as BoardActions from './board.actions';
import { BoardComponent } from "../components/board/board.component";
import { catchError, map, switchMap } from "rxjs/operators";
import { ActivatedRouteSnapshot } from "@angular/router";
import { of } from "rxjs";
import { BoardService } from "../services/board.service";
import { FieldsLoadedModel } from "../../../../../../../libs/api-interfaces/src/lib/models/fields-loaded.model";
import { GameStateModel } from "../../../../../../../libs/api-interfaces/src/lib/models/game-state.model";
import { DiceRolledModel } from "../../../../../../../libs/api-interfaces/src/lib/models/dice-rolled.model";

@Injectable()
export class BoardEffects {

  @Effect() boardComponentLoaded = this.s.navigation(BoardComponent, {
    run: (a: ActivatedRouteSnapshot, state: BoardPartialState) => {
      return of(a).pipe(
        switchMap(() => {
          return [
            BoardActions.BoardComponentLoaded(),
            BoardActions.loadFields(),
            BoardActions.loadGame(),
            BoardActions.loadDiceRolled()
          ]
        })
      )
    }
  });

  loadFields$ = createEffect(() => this.actions$.pipe(
    ofType(BoardActions.loadFields),
    switchMap(() => this.boardService.getBoardFields().pipe(
      map((fields: FieldsLoadedModel) => BoardActions.loadFieldsSuccess({ fields })),
      catchError(error => of(BoardActions.loadFieldsFailure({ error })))
      )
    ))
  );

  loadGame$ = createEffect(() => this.actions$.pipe(
    ofType(BoardActions.loadGame),
    switchMap(() => this.boardService.getGameState().pipe(
      map((response: GameStateModel) => {
        console.log(response)
        return BoardActions.loadGameSuccess({ game: response })
      })
      )
    ))
  );

  rollDice$ = createEffect(() => this.actions$.pipe(
    ofType(BoardActions.rollDice),
    map(() => {
      this.boardService.rollDice();
      return BoardActions.rollDiceSuccess()
    })
    )
  );

  leaveGame$ = createEffect(() => this.actions$.pipe(
    ofType(BoardActions.leaveGame),
    map(() => {
      this.boardService.leaveGame();
      return BoardActions.leaveGameSuccess();
    })
    )
  );

  loadDiceRolled$ = createEffect(() => this.actions$.pipe(
    ofType(BoardActions.loadDiceRolled),
    switchMap(() => this.boardService.getDiceRolled().pipe(
      map((response: DiceRolledModel) => {
        console.log(response)
        return BoardActions.loadDiceRolledSuccess({ dice: response })
      })
      )
    ))
  );

  constructor(
    private actions$: Actions,
    private s: DataPersistence<BoardPartialState>,
    private boardService: BoardService
  ) {
  }
}
