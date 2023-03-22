import { Component } from '@angular/core';
import { ClientService } from 'src/app/client/services/client.service';
import { ContractService } from '../../services/contract.service';
import { ModalWindowService } from 'src/app/components/modal-window/modal-window.service';

@Component({
  selector: 'app-page-contract',
  templateUrl: './page-contract.component.html',
  styleUrls: ['./page-contract.component.scss']
})
export class PageContractComponent  {
  constructor(
    public clientService: ClientService,
    public contractService: ContractService,
    public modalWindowService: ModalWindowService,
  ){}

  ngOnInit() {
    this.clientService.getAllClient();
  }
}
