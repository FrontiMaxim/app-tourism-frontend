import { Component } from '@angular/core';
import { FormPermitService } from '../../components/form-permit/form-permit.service';
import { ModalWindowService } from 'src/app/components/modal-window/modal-window.service';
import { PermitService } from '../../service/permit.service';

@Component({
  selector: 'app-page-permit',
  templateUrl: './page-permit.component.html',
  styleUrls: ['./page-permit.component.scss']
})
export class PagePermitComponent {
  constructor(
    public formPermitService: FormPermitService,
    public modalWindowService: ModalWindowService,
    public permitService: PermitService
  ) {}

  ngOnInit() {
    this.permitService.getAll();
  }
}
