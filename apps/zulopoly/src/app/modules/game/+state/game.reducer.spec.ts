import {GameEntity} from './game.models';
import * as GameActions from './game.actions';
import {initialState, reducer, State} from './game.reducer';

describe('Game Reducer', () => {
  const createGameEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as GameEntity);

  beforeEach(() => {
  });

  describe('valid Game actions', () => {
    it('loadGameSuccess should return set the list of known Game', () => {
      const game = [
        createGameEntity('PRODUCT-AAA'),
        createGameEntity('PRODUCT-zzz')
      ];
      const action = GameActions.loadGameSuccess({game});

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
