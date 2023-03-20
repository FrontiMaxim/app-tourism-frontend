import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalWindowService } from 'src/app/components/modal-window/modal-window.service';
import { DiscountService } from '../../services/discount.service';
import { FormDiscountService } from './form-discount.service';

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
    public formDiscountService: FormDiscountService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        size: new FormControl(
          this.formDiscountService.defaultData.size, 
          [Validators.required, Validators.min(0)]
        ),
        timeStart: new FormControl(
          this.formDiscountService.defaultData.timeStart, 
          [Validators.required]
        ),
        timeFinish: new FormControl(
          this.formDiscountService.defaultData.timeFinish, 
          [Validators.required]
        )
      }
    );
  }

  get size() { return this.form.get('size'); }
  get timeStart() { return this.form.get('timeStart'); }
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
