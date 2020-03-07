import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {fetch} from '@nrwl/angular';
import * as BoardActions from './board.actions';

@Injectable()
export class BoardEffects {
  loadBoard$ = createEffect(() =>
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
  );

  constructor(private actions$: Actions) {
  }
}
