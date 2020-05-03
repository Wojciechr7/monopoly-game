import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromBoard from './board.reducer';
import * as BoardSelectors from './board.selectors';
import { FieldBaseModel } from "../../../../../../../libs/api-interfaces/src/lib/models/fields/field-base.model";
import { map } from "rxjs/operators";
import { combineLatest } from "rxjs";
import * as BoardActions from './board.actions';

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
      return { top, right, bottom, left, center }
    })
  );

  dice$ = this.store.pipe(select(BoardSelectors.getDice));

  constructor(private store: Store<fromBoard.BoardPartialState>) {
  }

  rollDice() {
    this.store.dispatch(BoardActions.rollDice());
  }

}

export interface OrderedFields<T = FieldBaseModel> {
  top: T[];
  right: T[];
  bottom: T[];
  left: T[];
  center: T;
}
