import { MainContainerEntity } from './main-container.models';
import {
  State,
  mainContainerAdapter,
  initialState
} from './main-container.reducer';
import * as MainContainerSelectors from './main-container.selectors';

describe('MainContainer Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getMainContainerId = it => it['id'];
  const createMainContainerEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as MainContainerEntity);

  let state;

  beforeEach(() => {
    state = {
      mainContainer: mainContainerAdapter.addAll(
        [
          createMainContainerEntity('PRODUCT-AAA'),
          createMainContainerEntity('PRODUCT-BBB'),
          createMainContainerEntity('PRODUCT-CCC')
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true
        }
      )
    };
  });

  describe('MainContainer Selectors', () => {
    it('getAllMainContainer() should return the list of MainContainer', () => {
      const results = MainContainerSelectors.getAllMainContainer(state);
      const selId = getMainContainerId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = MainContainerSelectors.getSelected(state);
      const selId = getMainContainerId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getMainContainerLoaded() should return the current 'loaded' status", () => {
      const result = MainContainerSelectors.getMainContainerLoaded(state);

      expect(result).toBe(true);
    });

    it("getMainContainerError() should return the current 'error' state", () => {
      const result = MainContainerSelectors.getMainContainerError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
