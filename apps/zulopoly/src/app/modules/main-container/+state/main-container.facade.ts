import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromMainContainer from './main-container.reducer';
import * as MainContainerSelectors from './main-container.selectors';

@Injectable()
export class MainContainerFacade {
  loaded$ = this.store.pipe(
    select(MainContainerSelectors.getMainContainerLoaded)
  );
  allMainContainer$ = this.store.pipe(
    select(MainContainerSelectors.getAllMainContainer)
  );
  selectedMainContainer$ = this.store.pipe(
    select(MainContainerSelectors.getSelected)
  );

  constructor(
    private store: Store<fromMainContainer.MainContainerPartialState>
  ) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
