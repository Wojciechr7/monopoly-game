import { createAction, props } from '@ngrx/store';
import { MainContainerEntity } from './main-container.models';

export const loadMainContainer = createAction(
  '[MainContainer] Load MainContainer'
);

export const loadMainContainerSuccess = createAction(
  '[MainContainer] Load MainContainer Success',
  props<{ mainContainer: MainContainerEntity[] }>()
);

export const loadMainContainerFailure = createAction(
  '[MainContainer] Load MainContainer Failure',
  props<{ error: any }>()
);
