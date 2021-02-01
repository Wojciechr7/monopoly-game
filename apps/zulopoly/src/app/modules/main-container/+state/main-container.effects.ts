import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromMainContainer from './main-container.reducer';
import * as MainContainerActions from './main-container.actions';

@Injectable()
export class MainContainerEffects {
  loadMainContainer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MainContainerActions.loadMainContainer),
      fetch({
        run: action => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return MainContainerActions.loadMainContainerSuccess({
            mainContainer: []
          });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return MainContainerActions.loadMainContainerFailure({ error });
        }
      })
    )
  );

  constructor(private actions$: Actions) {}
}
