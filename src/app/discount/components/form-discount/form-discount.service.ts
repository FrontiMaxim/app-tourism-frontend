import { Injectable } from '@angular/core';
import { DiscountModel } from '../../models/discount.model';

@Injectable({
  providedIn: 'root'
})
export class FormDiscountService {

  constructor() {}

  emptyDiscount: DiscountModel = {
    timeStart: new Date(''),
    timeFinish: new Date(''),
    size: 0
  };

  defaultData: DiscountModel = this.emptyDiscount;

  titleForm: string;
}
