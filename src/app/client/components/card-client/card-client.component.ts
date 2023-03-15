import { Component, Input } from '@angular/core';
import { ClientModel } from '../../models/client.model';

@Component({
  selector: 'app-card-client',
  templateUrl: './card-client.component.html',
  styleUrls: ['./card-client.component.scss']
})
export class CardClientComponent {
  @Input() data: ClientModel;
}
