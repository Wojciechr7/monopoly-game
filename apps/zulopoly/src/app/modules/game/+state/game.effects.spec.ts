import {TestBed} from '@angular/core/testing';

import {Observable} from 'rxjs';

import {provideMockActions} from '@ngrx/effects/testing';
import {provideMockStore} from '@ngrx/store/testing';

import {DataPersistence, NxModule} from '@nrwl/angular';
import {hot} from '@nrwl/angular/testing';

import {GameEffects} from './game.effects';
import * as GameActions from './game.actions';

describe('GameEffects', () => {
  let actions: Observable<any>;
  let effects: GameEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        GameEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore()
      ]
    });

    effects = TestBed.get(GameEffects);
  });

  describe('loadGame$', () => {
    it('should work', () => {
      actions = hot('-a-|', {a: GameActions.loadGame()});

      const expected = hot('-a-|', {
        a: GameActions.loadGameSuccess({game: []})
      });

      expect(effects.loadGame$).toBeObservable(expected);
    });
  });
});
