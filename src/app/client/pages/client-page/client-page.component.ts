import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/client/services/client.service';
import { FormClientService } from '../../components/form-client/form-client.service';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.scss']
})
export class ClientPageComponent implements OnInit {

  constructor(
      public clientService: ClientService,
      public formClientService: FormClientService
    ) {}

  ngOnInit() {
    this.clientService.getAllClient();
  }

  isOpenModalWindow = false;

  openModalWindow() {
    this.isOpenModalWindow = true;
  }

  closeModalWindow() {
    this.isOpenModalWindow = false;
  }
}
