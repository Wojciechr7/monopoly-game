import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { MainContainerEntity } from './main-container.models';
import { MainContainerEffects } from './main-container.effects';
import { MainContainerFacade } from './main-container.facade';

import * as MainContainerSelectors from './main-container.selectors';
import * as MainContainerActions from './main-container.actions';
import {
  MAINCONTAINER_FEATURE_KEY,
  State,
  initialState,
  reducer
} from './main-container.reducer';

interface TestSchema {
  mainContainer: State;
}

describe('MainContainerFacade', () => {
  let facade: MainContainerFacade;
  let store: Store<TestSchema>;
  const createMainContainerEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as MainContainerEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(MAINCONTAINER_FEATURE_KEY, reducer),
          EffectsModule.forFeature([MainContainerEffects])
        ],
        providers: [MainContainerFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(MainContainerFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allMainContainer$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(MainContainerActions.loadMainContainer());

        list = await readFirst(facade.allMainContainer$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadMainContainerSuccess` to manually update list
     */
    it('allMainContainer$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allMainContainer$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          MainContainerActions.loadMainContainerSuccess({
            mainContainer: [
              createMainContainerEntity('AAA'),
              createMainContainerEntity('BBB')
            ]
          })
        );

        list = await readFirst(facade.allMainContainer$);
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
