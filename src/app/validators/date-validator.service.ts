import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DateValidatorService {

  constructor() { }

  startLessFinishValidator(): ValidatorFn {
    return (form: AbstractControl): ValidationErrors | null => {
      
      const dateStart = form.get('timeStart')?.value;
      const dateFinish = form.get('timeFinish')?.value;

      if(dateStart && dateFinish) {
        return dateFinish >= dateStart ? null : { dateFinishLessDateStart: true }
      }

      return null;;
    };
  }

  required(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      
      if(isNaN(Date.parse(control.value))) {
        return { required: true }
      }

      return null;;
    };
  }

  moreOrEqualNow(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      if(Date.parse(control.value) < Date.now()) {
        return { moreOrEqualNow: true }
      }

      return null;;
    };
  }
}
