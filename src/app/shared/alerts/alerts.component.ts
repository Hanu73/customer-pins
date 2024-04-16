import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css'],
})
export class AlertsComponent implements OnInit, OnDestroy {
  alertData: any;
  subscription: any;
  showAlert: boolean = false;
  constructor() {}

  ngOnInit() {
    this.getAlerts();
  }

  getAlerts() {
    this.subscription = this._sharedService.getAlertMessages.subscribe(
      (data) => {
        if (data.message) {
          this.showAlert = true;
          this.alertData = data;
          this.hideAlerts();
        } else {
          this.showAlert = false;
        }
      }
    );
  }

  dismissAlerts() {
    this.showAlert = false;
  }

  hideAlerts() {
    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
