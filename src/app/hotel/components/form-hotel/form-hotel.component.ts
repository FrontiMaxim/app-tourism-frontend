import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormHotelService } from './form-hotel.service';
import { ModalWindowService } from 'src/app/components/modal-window/modal-window.service';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-form-hotel',
  templateUrl: './form-hotel.component.html',
  styleUrls: ['./form-hotel.component.scss']
})
export class FormHotelComponent {

  form : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public formHotelService: FormHotelService,
    public modalWindowService: ModalWindowService,
    private hotelService: HotelService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl(
        this.formHotelService.defaultData.name, 
        [Validators.required]
      ),
      country: new FormControl(
        this.formHotelService.defaultData.country, 
        [Validators.required]
      ),
      city: new FormControl(
        this.formHotelService.defaultData.city, 
        [Validators.required]
      ),
      street: new FormControl(
        this.formHotelService.defaultData.street, 
        [Validators.required]
      ),
      home: new FormControl(
        this.formHotelService.defaultData.home, 
        [Validators.required]
      ),
      countStarts: new FormControl(
        this.formHotelService.defaultData.countStarts, 
        [Validators.required]
      )
    });
  }


  get name() { return this.form.get('name'); }
  get country() { return this.form.get('country'); }
  get city() { return this.form.get('city'); }
  get street() { return this.form.get('street'); }
  get home() { return this.form.get('home'); }
  get countStarts() { return this.form.get('countStarts'); }


  submit() {
    if(this.formHotelService.titleForm === 'Добавление отеля') {
      this.hotelService.save(this.form.value);
    } else {
      this.hotelService.update(this.form.value, this.formHotelService.defaultData.id!);
    }
  }
}
