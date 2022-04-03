import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AlertService } from '../features/alert/service/alert.service';
import { CLEAR_ALERT } from '../features/alert/store/alert.actions';
import { Alert, selectAlert } from '../features/alert/store/alert.reducer';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  opened: boolean = true
  subscription = new Subscription()
  constructor(private store: Store, private alertService: AlertService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.store.select(selectAlert).subscribe((alert) => {
        this.displayAlert(alert)
      }),
    )
  }

  private displayAlert(alert: Alert | null) {
    if (alert) {
      this.alertService.displayMessage(alert.type, alert.message, alert.timeout)
      setTimeout(() => {
        this.store.dispatch(CLEAR_ALERT())
      }, alert.timeout)
    }
  }

  onToggle(isOpened: boolean) {
    this.opened = isOpened
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
