import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private _message = '';
  private _mode: 'successfully' | 'unsuccessfully';
  private _isOpen = false;

  constructor() { }

  get message() {
    return this._message;
  }

  get mode() {
    return this._mode;
  }

  get isOpen() {
    return this._isOpen;
  }

  set message(message: string) {
    this._message = message
  }

  set mode(mode: 'successfully' | 'unsuccessfully') {
    this._mode = mode;
  }

  set isOpen(value: boolean) {
    this._isOpen = value;
  }
}
