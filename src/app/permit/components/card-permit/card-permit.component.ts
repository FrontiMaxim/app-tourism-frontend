import { Component, Input } from '@angular/core';
import { PermitModel } from '../../models/permit.model';

@Component({
  selector: 'app-card-permit',
  templateUrl: './card-permit.component.html',
  styleUrls: ['./card-permit.component.scss']
})
export class CardPermitComponent {
  @Input() data: PermitModel;
}
