import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {DataPersistence} from '@nrwl/angular';
import {BoardPartialState} from './board.reducer';
import * as BoardActions from './board.actions';
import {BoardComponent} from "../components/board/board.component";
import {catchError, map, switchMap} from "rxjs/operators";
import {ActivatedRouteSnapshot} from "@angular/router";
import {of} from "rxjs";
import {BoardService} from "../services/board.service";
import {FieldsLoadedModel} from "../../../../../../../libs/api-interfaces/src/lib/models/fields-loaded.model";

@Injectable()
export class BoardEffects {

  @Effect() boardComponentLoaded = this.s.navigation(BoardComponent, {
    run: (a: ActivatedRouteSnapshot, state: BoardPartialState) => {
      return of(a).pipe(
        switchMap(() => {
          return [
            BoardActions.BoardComponentLoaded(),
            BoardActions.loadFields()
          ]
        })
      )
    },
    onError: (a: ActivatedRouteSnapshot, e: any) => {
      return null;
    }
  });

  loadFields$ = createEffect(() => this.actions$.pipe(
    ofType(BoardActions.loadFields),
    switchMap(() => this.boardService.getBoardFields().pipe(
      map((fields: FieldsLoadedModel) => BoardActions.loadFieldsSuccess({fields})),
      catchError(error => of(BoardActions.loadFieldsFailure({error})))
      )
    ))
  );


  /*  loadFields$ = createEffect(() =>
      this.actions$.pipe(
        ofType(BoardActions.loadFields),
        fetch({
          run: action => {
            return this.boardService.getBoardFields().pipe(
              map((fields: FieldsLoadedModel) => {
                return BoardActions.loadFieldsSuccess({fields})
              })
            )
          },

          onError: (action, error) => {
            console.error('Error', error);
            return BoardActions.loadFieldsFailure({error});
          }
        })
      )
    );*/

  /*  loadBoard$ = createEffect(() =>
      this.actions$.pipe(
        ofType(BoardActions.loadBoard),
        fetch({
          run: action => {
            // Your custom service 'load' logic goes here. For now just return a success action...
            return BoardActions.loadBoardSuccess({board: []});
          },

          onError: (action, error) => {
            console.error('Error', error);
            return BoardActions.loadBoardFailure({error});
          }
        })
      )
    );*/

  constructor(
    private actions$: Actions,
    private s: DataPersistence<BoardPartialState>,
    private boardService: BoardService
  ) {
  }
}
