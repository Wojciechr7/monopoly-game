import {TestBed} from '@angular/core/testing';

import {Observable} from 'rxjs';

import {provideMockActions} from '@ngrx/effects/testing';
import {provideMockStore} from '@ngrx/store/testing';

import {DataPersistence, NxModule} from '@nrwl/angular';
import {hot} from '@nrwl/angular/testing';

import {BoardEffects} from './board.effects';
import * as BoardActions from './board.actions';

describe('BoardEffects', () => {
  let actions: Observable<any>;
  let effects: BoardEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        BoardEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore()
      ]
    });

    effects = TestBed.get(BoardEffects);
  });

  describe('loadBoard$', () => {
    it('should work', () => {
      actions = hot('-a-|', {a: BoardActions.loadBoard()});

      const expected = hot('-a-|', {
        a: BoardActions.loadBoardSuccess({board: []})
      });

      expect(effects.loadBoard$).toBeObservable(expected);
    });
  });
});
