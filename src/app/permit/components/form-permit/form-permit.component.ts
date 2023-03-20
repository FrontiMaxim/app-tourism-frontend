import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormPermitService } from './form-permit.service';
import { ModalWindowService } from 'src/app/components/modal-window/modal-window.service';
import { PermitService } from '../../service/permit.service';
import { HotelService } from 'src/app/hotel/services/hotel.service';
import { Observable, of, subscribeOn } from 'rxjs';
import { HotelModel } from 'src/app/hotel/models/hotel.model';
import { DiscountService } from 'src/app/discount/services/discount.service';


@Component({
  selector: 'app-form-permit',
  templateUrl: './form-permit.component.html',
  styleUrls: ['./form-permit.component.scss']
})
export class FormPermitComponent {

  form : FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    public formPermitService: FormPermitService,
    public modalWindowService: ModalWindowService,
    public hotelSerivce: HotelService,
    private permitService: PermitService,
    public discountService: DiscountService
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
          [Validators.required]
        ),
        timeFinish: new FormControl(
          this.formPermitService.defaultData.timeFinish, 
          [Validators.required]
        ),
        hotel: new FormControl(
          this.formPermitService.defaultData.hotel.name, 
          [Validators.required]
        ),
        discount: new FormControl(
          this.formPermitService.defaultData.discount ? this.formPermitService.defaultData.discount.id : null, 
        )
      }
    );
  }

  get price() { return this.form.get('price'); }
  get timeStart() { return this.form.get('timeStart'); }
  get timeFinish() { return this.form.get('timeFinish'); }
  get hotel() { return this.form.get('hotel'); }
  get discount() { return this.form.get('discount'); }

  submit() {
    this.formPermitService.send(this.form);
  }
}
