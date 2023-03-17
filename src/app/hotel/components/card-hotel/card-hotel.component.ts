import { Component, Input, OnInit } from '@angular/core';
import { HotelModel } from '../../models/hotel.model';

@Component({
  selector: 'app-card-hotel',
  templateUrl: './card-hotel.component.html',
  styleUrls: ['./card-hotel.component.scss']
})
export class CardHotelComponent {
  @Input() data: HotelModel;

  stars: Number[] = []

  ngOnInit() {
    this.stars = Array(this.data.countStarts);
  }
}
