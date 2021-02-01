import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { MainContainerEffects } from './main-container.effects';
import * as MainContainerActions from './main-container.actions';

describe('MainContainerEffects', () => {
  let actions: Observable<any>;
  let effects: MainContainerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        MainContainerEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore()
      ]
    });

    effects = TestBed.get(MainContainerEffects);
  });

  describe('loadMainContainer$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: MainContainerActions.loadMainContainer() });

      const expected = hot('-a-|', {
        a: MainContainerActions.loadMainContainerSuccess({ mainContainer: [] })
      });

      expect(effects.loadMainContainer$).toBeObservable(expected);
    });
  });
});
