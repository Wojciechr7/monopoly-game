import {BoardEntity} from './board.models';
import {boardAdapter, initialState} from './board.reducer';
import * as BoardSelectors from './board.selectors';

describe('Board Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getBoardId = it => it['id'];
  const createBoardEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as BoardEntity);

  let state;

  beforeEach(() => {
    state = {
      board: boardAdapter.addAll(
        [
          createBoardEntity('PRODUCT-AAA'),
          createBoardEntity('PRODUCT-BBB'),
          createBoardEntity('PRODUCT-CCC')
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

  describe('Board Selectors', () => {
    it('getAllBoard() should return the list of Board', () => {
      const results = BoardSelectors.getAllBoard(state);
      const selId = getBoardId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = BoardSelectors.getSelected(state);
      const selId = getBoardId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getBoardLoaded() should return the current 'loaded' status", () => {
      const result = BoardSelectors.getBoardLoaded(state);

      expect(result).toBe(true);
    });

    it("getBoardError() should return the current 'error' state", () => {
      const result = BoardSelectors.getBoardError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
