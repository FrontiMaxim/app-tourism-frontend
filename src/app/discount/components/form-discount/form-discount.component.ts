import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalWindowService } from 'src/app/components/modal-window/modal-window.service';
import { DiscountService } from '../../services/discount.service';
import { FormDiscountService } from './form-discount.service';
import { DateValidatorService } from 'src/app/validators/date-validator.service';

@Component({
  selector: 'app-form-discount',
  templateUrl: './form-discount.component.html',
  styleUrls: ['./form-discount.component.scss']
})
export class FormDiscountComponent {
  form : FormGroup;
  isSubmit = false;
  
  constructor(
    private formBuilder: FormBuilder,
    public modalWindowService: ModalWindowService,
    public discountService: DiscountService,
    public formDiscountService: FormDiscountService,
    private dateValidatorSerivce: DateValidatorService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        size: new FormControl(
          this.formDiscountService.defaultData.size, 
          [Validators.required, Validators.min(0)]
        ),
        timeFinish: new FormControl(
          this.formDiscountService.defaultData.timeFinish, 
          [this.dateValidatorSerivce.required(), this.dateValidatorSerivce.moreOrEqualNow()]
        )
      }
    );
  }

  get size() { return this.form.get('size'); }
  get timeFinish() { return this.form.get('timeFinish'); }
 
  submit() {
    this.isSubmit = true;

    if(!this.form.invalid) {
      if(this.formDiscountService.titleForm === 'Добавление скидки') {
        this.discountService.save(this.form.value);
      } else {
        this.discountService.update(this.form.value, this.formDiscountService.defaultData.id!);
      }  
    }
  }
}
