import { Injectable } from '@angular/core';
import { ClientModel } from '../../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class FormClientService {

  constructor() { }

  emptyClient: ClientModel = {
    name: '',
    surname: '',
    patronymic: '',
    birthday: new Date(''),
    phone: '',
    passportSeries: '',
    passportNumber: ''
  };

  defaultData: ClientModel = this.emptyClient;

  titleForm: string;
}
