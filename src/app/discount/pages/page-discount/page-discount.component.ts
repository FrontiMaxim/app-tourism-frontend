import { Component } from '@angular/core';
import { FormDiscountService } from '../../components/form-discount/form-discount.service';
import { ModalWindowService } from 'src/app/components/modal-window/modal-window.service';
import { DiscountService } from '../../services/discount.service';

@Component({
  selector: 'app-page-discount',
  templateUrl: './page-discount.component.html',
  styleUrls: ['./page-discount.component.scss']
})
export class PageDiscountComponent {
  constructor(
    public formDiscountService: FormDiscountService,
    public modalWindowService: ModalWindowService,
    public discountService: DiscountService
  ) {}

  ngOnInit() {
    this.discountService.getAll();
  }
}
