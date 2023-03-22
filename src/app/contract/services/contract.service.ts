import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertService } from 'src/app/components/alert/alert.service';
import { ModalWindowService } from 'src/app/components/modal-window/modal-window.service';
import { ContractModel } from '../models/contarct.model';
import { ClientModel } from 'src/app/client/models/client.model';
import { PermitModel } from 'src/app/permit/models/permit.model';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(
    private http: HttpClient,  
    private alertSerivce: AlertService,
    private modalWindowService: ModalWindowService
  ) { }

  private _PATH = 'api/contract';
  private _listContract: ContractModel[];

  currentClient: ClientModel;
  currentPermit: PermitModel; 

  save(contract: ContractModel) {
    this.http.post<HttpResponse<any>>(this._PATH, contract).subscribe({
      error: () => {
        this.alertSerivce.message = 'Такой договор уже существует';
        this.alertSerivce.mode = 'unsuccessfully';
        this.alertSerivce.isOpen = true;

        setTimeout(() => {
          this.alertSerivce.isOpen = false;
        }, 3000);
      },
      complete: () => {
        this.alertSerivce.message = 'Договор успешно заключён';
        this.alertSerivce.mode = 'successfully';
        this.alertSerivce.isOpen = true;
        this.getAll(contract.client.id!);

        this.modalWindowService.close();
        
        setTimeout(() => {
          this.alertSerivce.isOpen = false;
        }, 3000);
      }
    })
  }

  getAll(id_client: number) {
    this.http.get<ContractModel[]>(this._PATH, {
      params: {
        id_client
      }
    }).subscribe(list => this._listContract = [...list]);
  }

  get listContract() {
    return this._listContract;
  }
}
