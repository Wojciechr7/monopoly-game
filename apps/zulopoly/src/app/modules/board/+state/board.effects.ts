import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {DataPersistence} from '@nrwl/angular';
import {BoardPartialState} from './board.reducer';
import * as BoardActions from './board.actions';
import {BoardComponent} from "../components/board/board.component";
import {switchMap} from "rxjs/operators";
import {ActivatedRouteSnapshot} from "@angular/router";
import {of} from "rxjs";

@Injectable()
export class BoardEffects {

  @Effect() boardComponentLoaded = this.s.navigation(BoardComponent, {
    run: (a: ActivatedRouteSnapshot, state: BoardPartialState) => {
      return of(a).pipe(
        switchMap(() => {
          return [
            BoardActions.BoardComponentLoaded()
          ]
        })
      )
    },
    onError: (a: ActivatedRouteSnapshot, e: any) => {
      return null;
    }
  });

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
    private s: DataPersistence<BoardPartialState>
  ) {
  }
}
