import { Component, Input } from '@angular/core';
import { DiscountModel } from '../../models/discount.model';

@Component({
  selector: 'app-card-discount',
  templateUrl: './card-discount.component.html',
  styleUrls: ['./card-discount.component.scss']
})
export class CardDiscountComponent {
  @Input() data: DiscountModel;
}
