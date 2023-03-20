import { Injectable } from '@angular/core';
import { PermitModel } from '../../models/permit.model';
import { HotelModel } from 'src/app/hotel/models/hotel.model';
import { HotelService } from 'src/app/hotel/services/hotel.service';
import { FormGroup } from '@angular/forms';
import { DiscountModel } from 'src/app/discount/models/discount.model';
import { DiscountService } from 'src/app/discount/services/discount.service';
import { Observable, Subscription, subscribeOn } from 'rxjs';
import { PermitService } from '../../service/permit.service';

@Injectable({
  providedIn: 'root'
})
export class FormPermitService {

  constructor(
    private hotelSerivce: HotelService,
    private permitService: PermitService,
    private discountSerivce: DiscountService
  ) {}

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

    form.value['hotel'] = this.hotelSerivce.listHotel
      .find((hotel: HotelModel) => hotel.name === name);

  }

  selectDiscount(id: number, form: FormGroup) {
    if(form.get('discount')?.value) {
      form.value['discount'] = this.discountSerivce.listDiscount
        .find((dicsount: DiscountModel) => dicsount.id === id);
    }
  }

  send(form: FormGroup) {
    this.selectHotel(form.get('hotel')?.value, form);
    this.selectDiscount(form.get('discount')?.value, form);

    console.log(form.value);

    if(this.titleForm === 'Добавление путёвки') {
      this.permitService.save(form.value);
    } else {
      this.permitService.update(form.value, this.defaultData.id!);
    }  
  }
}
