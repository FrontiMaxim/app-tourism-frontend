import { Pipe, PipeTransform } from '@angular/core';
import { DiscountModel } from '../discount/models/discount.model';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {

  transform(value: DiscountModel[], dateNow: number): DiscountModel[] {
   
    if(value && dateNow) {
      return value.filter(v => Date.parse(v.timeFinish.toString()) >= dateNow);
    }
    return [];
  }

}
