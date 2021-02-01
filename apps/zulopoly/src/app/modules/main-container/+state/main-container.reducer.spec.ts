import { MainContainerEntity } from './main-container.models';
import * as MainContainerActions from './main-container.actions';
import { State, initialState, reducer } from './main-container.reducer';

describe('MainContainer Reducer', () => {
  const createMainContainerEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as MainContainerEntity);

  beforeEach(() => {});

  describe('valid MainContainer actions', () => {
    it('loadMainContainerSuccess should return set the list of known MainContainer', () => {
      const mainContainer = [
        createMainContainerEntity('PRODUCT-AAA'),
        createMainContainerEntity('PRODUCT-zzz')
      ];
      const action = MainContainerActions.loadMainContainerSuccess({
        mainContainer
      });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
