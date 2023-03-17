import { Component } from '@angular/core';
import { FormHotelService } from '../../components/form-hotel/form-hotel.service';
import { ModalWindowService } from 'src/app/components/modal-window/modal-window.service';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-page-hotel',
  templateUrl: './page-hotel.component.html',
  styleUrls: ['./page-hotel.component.scss']
})
export class PageHotelComponent {
  constructor(
    public formHotelService: FormHotelService,
    public modalWindowService: ModalWindowService,
    public hotelService: HotelService
  ) {}


  ngOnInit() {
    this.hotelService.getAll();
  }
}
