import * as fromAlert from '../shared/alert/store/alert.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface AppState {
  alert: fromAlert.AlertState;
}

export const appReducers: ActionReducerMap<AppState> = {
  alert: fromAlert.alertsReducer,
};
