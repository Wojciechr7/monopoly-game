import {BoardEntity} from './board.models';
import * as BoardActions from './board.actions';
import {initialState, reducer, State} from './board.reducer';

describe('Board Reducer', () => {
  const createBoardEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as BoardEntity);

  beforeEach(() => {
  });

  describe('valid Board actions', () => {
    it('loadBoardSuccess should return set the list of known Board', () => {
      const board = [
        createBoardEntity('PRODUCT-AAA'),
        createBoardEntity('PRODUCT-zzz')
      ];
      const action = BoardActions.loadBoardSuccess({board});

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
