import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Alert, AlertType } from './../alert/alert.model';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private keepAfterRouteChange = false;
  private subject = new Subject<Alert>(); // contains all alerts

  constructor() {}

  // enable subscribing to alerts observable
  onAlert(): Observable<Alert> {
    return this.subject.asObservable();
  }

  success(message: string, alertId?: string): void {
    this.showAlert(new Alert({ message, type: AlertType.Success, alertId }));
  }

  showAlert(alert: Alert): void {
    this.keepAfterRouteChange = alert.keepAfterRouteChange;
    this.subject.next(alert);
  }
}
