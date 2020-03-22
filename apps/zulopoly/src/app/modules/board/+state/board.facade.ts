import {Injectable} from '@angular/core';
import {Action, select, Store} from '@ngrx/store';
import * as fromBoard from './board.reducer';
import * as BoardSelectors from './board.selectors';
import {FieldBaseModel} from "../../../../../../../libs/api-interfaces/src/lib/models/fields/field-base.model";
import {map} from "rxjs/operators";
import {combineLatest} from "rxjs";

@Injectable()
export class BoardFacade {
  boardFields$ = combineLatest(
    this.store.pipe(select(BoardSelectors.getTopBoardFields)),
    this.store.pipe(select(BoardSelectors.getRightBoardFields)),
    this.store.pipe(select(BoardSelectors.getBottomBoardFields)),
    this.store.pipe(select(BoardSelectors.getLeftBoardFields)),
    this.store.pipe(select(BoardSelectors.getCenterField)),
  ).pipe(
    map(([top, right, bottom, left, center]) => {
      return {top, right, bottom, left, center}
    })
  );
  /*  boardFields$ = this.store.pipe(select(BoardSelectors.getBoardFields));*/


  /*  allBoard$ = this.store.pipe(select(BoardSelectors.getAllBoard));
    selectedBoard$ = this.store.pipe(select(BoardSelectors.getSelected));*/

  constructor(private store: Store<fromBoard.BoardPartialState>) {
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}

export interface OrderedFields<T = FieldBaseModel> {
  top: T[];
  right: T[];
  bottom: T[];
  left: T[];
  center: T;
}
