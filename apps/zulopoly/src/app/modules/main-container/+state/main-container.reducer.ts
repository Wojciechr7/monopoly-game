import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as MainContainerActions from './main-container.actions';
import { MainContainerEntity } from './main-container.models';

export const MAINCONTAINER_FEATURE_KEY = 'mainContainer';

export interface State extends EntityState<MainContainerEntity> {
  selectedId?: string | number; // which MainContainer record has been selected
  loaded: boolean; // has the MainContainer list been loaded
  error?: string | null; // last none error (if any)
}

export interface MainContainerPartialState {
  readonly [MAINCONTAINER_FEATURE_KEY]: State;
}

export const mainContainerAdapter: EntityAdapter<
  MainContainerEntity
> = createEntityAdapter<MainContainerEntity>();

export const initialState: State = mainContainerAdapter.getInitialState({
  // set initial required properties
  loaded: false
});

const mainContainerReducer = createReducer(
  initialState,
  on(MainContainerActions.loadMainContainer, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(
    MainContainerActions.loadMainContainerSuccess,
    (state, { mainContainer }) =>
      mainContainerAdapter.addAll(mainContainer, { ...state, loaded: true })
  ),
  on(MainContainerActions.loadMainContainerFailure, (state, { error }) => ({
    ...state,
    error
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return mainContainerReducer(state, action);
}
