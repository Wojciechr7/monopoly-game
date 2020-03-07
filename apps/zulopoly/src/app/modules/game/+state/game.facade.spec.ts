import {NgModule} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {readFirst} from '@nrwl/angular/testing';

import {EffectsModule} from '@ngrx/effects';
import {Store, StoreModule} from '@ngrx/store';

import {NxModule} from '@nrwl/angular';

import {GameEntity} from './game.models';
import {GameEffects} from './game.effects';
import {GameFacade} from './game.facade';
import * as GameActions from './game.actions';
import {GAME_FEATURE_KEY, reducer, State} from './game.reducer';

interface TestSchema {
  game: State;
}

describe('GameFacade', () => {
  let facade: GameFacade;
  let store: Store<TestSchema>;
  const createGameEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as GameEntity);

  beforeEach(() => {
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(GAME_FEATURE_KEY, reducer),
          EffectsModule.forFeature([GameEffects])
        ],
        providers: [GameFacade]
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
      facade = TestBed.get(GameFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allGame$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(GameActions.loadGame());

        list = await readFirst(facade.allGame$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadGameSuccess` to manually update list
     */
    it('allGame$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allGame$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          GameActions.loadGameSuccess({
            game: [createGameEntity('AAA'), createGameEntity('BBB')]
          })
        );

        list = await readFirst(facade.allGame$);
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
