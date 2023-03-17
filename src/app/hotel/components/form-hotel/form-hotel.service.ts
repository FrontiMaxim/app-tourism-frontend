import { Injectable } from '@angular/core';
import { HotelModel } from '../../models/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class FormHotelService {

  constructor() { }

  emptyHotel: HotelModel = {
    name: '',
    country: '',
    city: '',
    street: '',
    home: '',
    countStarts: 1
  };

  defaultData: HotelModel = this.emptyHotel;

  titleForm: string;
}
