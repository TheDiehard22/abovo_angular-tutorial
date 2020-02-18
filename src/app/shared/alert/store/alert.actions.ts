import { Action } from "@ngrx/store";
import { Alert } from "../alert.model";

export const ADD_ALERT = "ADD_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";

export class AddAlert implements Action {
  readonly type = ADD_ALERT;

  constructor(public payload: Alert) {}
}

export class RemoveAlert implements Action {
  readonly type = REMOVE_ALERT;

  constructor(public id: string) {
    console.log(" thef");
  }
}

export type AlertActions = AddAlert | RemoveAlert;
