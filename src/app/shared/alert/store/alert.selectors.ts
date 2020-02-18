import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AlertState } from "./alert.reducer";
import { Alert, AlertType } from "../alert.model";

// feature selector which selects a top-level feature state property
export const getAlertState = createFeatureSelector<AlertState>("alert");

export const getAlerts = createSelector(getAlertState, (state: AlertState) => {
  return state.alerts;
});

export const getPreviousAlerts = createSelector(
  getAlertState,
  (state: AlertState) => state.previousAlerts,
);

export const selectVisibleAlerts = createSelector(getAlerts, allAlerts => {
  return allAlerts.filter(alert => {
    console.log(alert.type, AlertType.Success);
    // return alert.type === AlertType.Success;
    return true;
  });
  // return allAlerts;
});
// export const selectAlerts = createSelector(() => {});
