import {Injectable} from '@angular/core';

import {Action, select, Store} from '@ngrx/store';

import * as fromBoard from './board.reducer';
import * as BoardSelectors from './board.selectors';

@Injectable()
export class BoardFacade {
  boardFields$ = this.store.pipe(select(BoardSelectors.getBoardFields));


  /*  allBoard$ = this.store.pipe(select(BoardSelectors.getAllBoard));
    selectedBoard$ = this.store.pipe(select(BoardSelectors.getSelected));*/

  constructor(private store: Store<fromBoard.BoardPartialState>) {
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
