import { Component, Input } from '@angular/core';
import { ContractModel } from '../../models/contarct.model';

@Component({
  selector: 'app-card-contract',
  templateUrl: './card-contract.component.html',
  styleUrls: ['./card-contract.component.scss']
})
export class CardContractComponent {
  @Input() data: ContractModel;
}
