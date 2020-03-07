import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {fetch} from '@nrwl/angular';
import * as GameActions from './game.actions';

@Injectable()
export class GameEffects {
  loadGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameActions.loadGame),
      fetch({
        run: action => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return GameActions.loadGameSuccess({game: []});
        },

        onError: (action, error) => {
          console.error('Error', error);
          return GameActions.loadGameFailure({error});
        }
      })
    )
  );

  constructor(private actions$: Actions) {
  }
}
