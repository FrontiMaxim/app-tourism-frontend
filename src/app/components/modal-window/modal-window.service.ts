import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalWindowService {

  private _isOpen = false;

  constructor() { }

  get isOpen() {
    return this._isOpen;
  }

  close() {
    this._isOpen = false;
  }

  open() {
    this._isOpen = true;
  }
}
