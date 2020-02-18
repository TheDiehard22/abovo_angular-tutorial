import { Alert, AlertType } from "../alert.model";
import * as AlertActions from "./alert.actions";
import { createFeatureSelector } from "@ngrx/store";

export interface AlertState {
  alerts: Alert[];
  previousAlerts: Alert[];
}

const initialState: AlertState = {
  alerts: [],
  previousAlerts: [],
};

export function alertsReducer(
  state: AlertState = initialState,
  action: AlertActions.AlertActions,
): AlertState {
  switch (action.type) {
    case AlertActions.ADD_ALERT:
      return {
        ...state,
        alerts: [...state.alerts, action.payload],
      };

    case AlertActions.REMOVE_ALERT:
      return {
        ...state,
        alerts: state.alerts.filter((alert, idx) => idx !== 0),
      };

    default:
      return state;
  }
}
