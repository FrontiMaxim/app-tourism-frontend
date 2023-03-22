import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormPermitService } from './form-permit.service';
import { ModalWindowService } from 'src/app/components/modal-window/modal-window.service';
import { HotelService } from 'src/app/hotel/services/hotel.service';
import { DiscountService } from 'src/app/discount/services/discount.service';
import { DateValidatorService } from 'src/app/validators/date-validator.service';


@Component({
  selector: 'app-form-permit',
  templateUrl: './form-permit.component.html',
  styleUrls: ['./form-permit.component.scss']
})
export class FormPermitComponent {

  form : FormGroup;
  isSubmit = false;
  dateNow = Date.now();
  
  constructor(
    private formBuilder: FormBuilder,
    public formPermitService: FormPermitService,
    public modalWindowService: ModalWindowService,
    public hotelSerivce: HotelService,
    public discountService: DiscountService,
    private dateValidatorSerivce: DateValidatorService
  ) {}

  ngOnInit(): void {

    this.hotelSerivce.getAll();
    this.discountService.getAll();

    this.form = this.formBuilder.group(
      
      {
        price: new FormControl(
          this.formPermitService.defaultData.price, 
          [Validators.required, Validators.min(0)]
        ),
        timeStart: new FormControl(
          this.formPermitService.defaultData.timeStart, 
          [this.dateValidatorSerivce.required()]
        ),
        timeFinish: new FormControl(
          this.formPermitService.defaultData.timeFinish, 
          [this.dateValidatorSerivce.required()]
        ),
        hotel: new FormControl(
          this.formPermitService.defaultData.hotel.name, 
          [Validators.required]
        ),
        discount: new FormControl(
          this.formPermitService.defaultData.discount ? this.formPermitService.defaultData.discount.id : null, 
        )
      },
      {
        validators: [this.dateValidatorSerivce.startLessFinishValidator()]
      }
    );
  }

  get price() { return this.form.get('price'); }
  get timeStart() { return this.form.get('timeStart'); }
  get timeFinish() { return this.form.get('timeFinish'); }
  get hotel() { return this.form.get('hotel'); }
  get discount() { return this.form.get('discount'); }

  submit() {
    this.isSubmit = true;
    console.log(this.form.value);

    if(!this.form.invalid) {
      this.formPermitService.send(this.form);
    }
  }
}
