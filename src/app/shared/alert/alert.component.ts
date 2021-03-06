import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  @Input() message: string;
  @Output() close = new EventEmitter<void>();

  constructor(private alert: AlertService) {}

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
