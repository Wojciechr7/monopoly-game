import {createAction, props} from '@ngrx/store';
import {FieldsLoadedModel} from "../../../../../../../libs/api-interfaces/src/lib/models/fields-loaded.model";

export const BoardComponentLoaded = createAction('[Board] Board Component Loaded');

export const loadFields = createAction('[Board] load Fields');

export const loadFieldsSuccess = createAction(
  '[Board] Load Fields Success',
  props<{ fields: FieldsLoadedModel }>()
);

export const loadFieldsFailure = createAction(
  '[Board] Load Fields Failure',
  props<{ error: any }>()
);
