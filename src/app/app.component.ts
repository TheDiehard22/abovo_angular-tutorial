import { Component, OnInit } from '@angular/core';
import { AlertService } from './shared/services/alert.service';
import { Alert } from './shared/services/alert.model';
import { Observable, Subscription, interval } from 'rxjs';
import { tap, timeout } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private alert: AlertService) {}
  alerts: Alert[] = [];
  alert$: Subscription;

  ngOnInit(): void {
    this.alert$ = this.alert.onAlert().subscribe(alert => {
      console.log('from app.comp', alert);
      if (alert.message !== null) {
        this.alerts.push(alert);
      }

      setInterval(() => {
        this.alerts.splice(0, 1);
      }, 4000);
    });
  }

  onClose() {}
}
