import { Component, OnInit } from "@angular/core";
import { AlertService } from "./shared/services/alert.service";
import { Alert } from "./shared/alert/alert.model";
import { Observable, Subscription, interval } from "rxjs";
import { tap, timeout, map } from "rxjs/operators";
import { Store, select } from "@ngrx/store";

import * as fromApp from "./store/app.reducer";
import * as fromAlert from "./shared/alert/store/alert.actions";
import { selectVisibleAlerts } from "./shared/alert/store/alert.selectors";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<fromApp.AppState>) {}
  // alerts: Observable<{ alerts: Alert[] }>;
  alerts: Observable<Alert[]>;

  ngOnInit(): void {
    // this.alerts = this.store.select(store => store.alert);
    this.alerts = this.store.select(selectVisibleAlerts);
  }

  onClose(): void {
    return;
  }
}
