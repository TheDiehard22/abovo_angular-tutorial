import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType, Effect } from "@ngrx/effects";
import * as AlertActions from "./alert.actions";
import { Store } from "@ngrx/store";
import * as fromApp from "../../../store/app.reducer";
import * as fromAlert from "../store/alert.actions";
import { tap, take, switchMap, timeout } from "rxjs/operators";
import { once } from "cluster";

@Injectable()
export class AlertEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromApp.AppState>,
  ) {}

  alertAdded$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AlertActions.ADD_ALERT),
        tap(() => {
          setTimeout(() => {
            this.store.dispatch(new fromAlert.RemoveAlert("1"));
          }, 2000);
        }),
        // tap(() => {
        //   console.log("object");
        //   this.store.dispatch(new fromAlert.RemoveAlert("1"));
        // }),
        // mergeMap(action => {
        //   return this.store.dispatch(new fromAlert.RemoveAlert("1"));
        // }),
      ),
    { dispatch: false },
  );
}
