import {NgModule} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {readFirst} from '@nrwl/angular/testing';

import {EffectsModule} from '@ngrx/effects';
import {Store, StoreModule} from '@ngrx/store';

import {NxModule} from '@nrwl/angular';

import {BoardEntity} from './board.models';
import {BoardEffects} from './board.effects';
import {BoardFacade} from './board.facade';
import * as BoardActions from './board.actions';
import {BOARD_FEATURE_KEY, reducer, State} from './board.reducer';

interface TestSchema {
  board: State;
}

describe('BoardFacade', () => {
  let facade: BoardFacade;
  let store: Store<TestSchema>;
  const createBoardEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as BoardEntity);

  beforeEach(() => {
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(BOARD_FEATURE_KEY, reducer),
          EffectsModule.forFeature([BoardEffects])
        ],
        providers: [BoardFacade]
      })
      class CustomFeatureModule {
      }

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {
      }

      TestBed.configureTestingModule({imports: [RootModule]});

      store = TestBed.get(Store);
      facade = TestBed.get(BoardFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allBoard$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(BoardActions.loadBoard());

        list = await readFirst(facade.allBoard$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadBoardSuccess` to manually update list
     */
    it('allBoard$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allBoard$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          BoardActions.loadBoardSuccess({
            board: [createBoardEntity('AAA'), createBoardEntity('BBB')]
          })
        );

        list = await readFirst(facade.allBoard$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
