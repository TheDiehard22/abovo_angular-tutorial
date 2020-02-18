import { Component, OnInit } from "@angular/core";
import { AlertService } from "./shared/services/alert.service";
import { Alert } from "./shared/alert/alert.model";
import { Observable, Subscription, interval } from "rxjs";
import { tap, timeout, map } from "rxjs/operators";
import { Store, select } from "@ngrx/store";

import * as fromApp from "./store/app.reducer";
import * as fromAlert from "./shared/alert/store/alert.actions";
import { selectVisibleAlerts } from "./shared/alert/store/alert.selectors";
import {
  transition,
  animate,
  state,
  style,
  trigger,
  query,
  stagger,
} from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("listAnimation", [
      transition("* <=> *", [
        query(
          ":enter",
          [
            style({ opacity: 0, transform: "translateX(-20px)" }),
            stagger(
              "60ms",
              animate(
                "600ms ease-out",
                style({ opacity: 1, transform: "translateX(0)" }),
              ),
            ),
          ],
          { optional: true },
        ),
        query(
          ":leave",
          animate(
            "200ms",
            style({ opacity: 0, transform: "translateX(-100px)" }),
          ),
          {
            optional: true,
          },
        ),
      ]),
    ]),
  ],
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
