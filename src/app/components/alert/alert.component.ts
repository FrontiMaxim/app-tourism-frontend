import { Component, Input } from '@angular/core';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  service: AlertService;

  constructor(private alertService: AlertService) {
    this.service = alertService;
  }
}
