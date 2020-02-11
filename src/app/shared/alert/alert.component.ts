import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { AlertService } from '../services/alert.service';
import { Alert } from './../services/alert.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() message: string;
  @Output() close = new EventEmitter<void>();

  // constructor(private alert: AlertService) {}

  // ngOnInit() {
  //   this.subscription = this.alert.onAlert().subscribe(alert => {
  //     if (!alert.message) {
  //       this.alerts = [];
  //       return;
  //     }

  //     this.alerts.push(alert);
  //   });
  // }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
