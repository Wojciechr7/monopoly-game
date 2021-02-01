import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  MAINCONTAINER_FEATURE_KEY,
  State,
  MainContainerPartialState,
  mainContainerAdapter
} from './main-container.reducer';

// Lookup the 'MainContainer' feature state managed by NgRx
export const getMainContainerState = createFeatureSelector<
  MainContainerPartialState,
  State
>(MAINCONTAINER_FEATURE_KEY);

const { selectAll, selectEntities } = mainContainerAdapter.getSelectors();

export const getMainContainerLoaded = createSelector(
  getMainContainerState,
  (state: State) => state.loaded
);

export const getMainContainerError = createSelector(
  getMainContainerState,
  (state: State) => state.error
);

export const getAllMainContainer = createSelector(
  getMainContainerState,
  (state: State) => selectAll(state)
);

export const getMainContainerEntities = createSelector(
  getMainContainerState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getMainContainerState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getMainContainerEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
