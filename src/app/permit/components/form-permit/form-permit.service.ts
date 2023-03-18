import { Injectable } from '@angular/core';
import { PermitModel } from '../../models/permit.model';
import { HotelModel } from 'src/app/hotel/models/hotel.model';
import { HotelService } from 'src/app/hotel/services/hotel.service';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormPermitService {

  constructor(private hotelSerivce: HotelService) {}

  emptyPermit: PermitModel = {
    price: 0,
    timeStart: new Date(''),
    timeFinish: new Date(''),
    hotel: {} as HotelModel,
    discount: null
  };

  defaultData: PermitModel = this.emptyPermit;

  titleForm: string;

  selectHotel(name: string, form: FormGroup) {
    this.hotelSerivce.listHotel.subscribe({
      next: (
        (list: HotelModel[]) => {
          form.value['hotel'] = list.find((hotel: HotelModel) => hotel.name === name);
        }
      )
    });
  }
}
