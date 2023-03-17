import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AlertService } from 'src/app/components/alert/alert.service';
import { ClientModel } from '../models/client.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient,  private alertSerivce: AlertService) { }

  private _PATH = 'api/client';
  private _listClient$: Observable<ClientModel[]>;
  
  saveClient(client: ClientModel, resetClick: EventEmitter<any>) {
    this.http.post<HttpResponse<any>>(this._PATH, client).subscribe({
      error: () => {
        this.alertSerivce.message = 'Клиент с таким паспортом уже существует';
        this.alertSerivce.mode = 'unsuccessfully';
        this.alertSerivce.isOpen = true;
      },
      complete: () => {
        this.alertSerivce.message = 'Информация о клиенте добавлена';
        this.alertSerivce.mode = 'successfully';
        this.alertSerivce.isOpen = true;
        this.getAllClient();

        resetClick.emit();
        
        setTimeout(() => {
          this.alertSerivce.isOpen = false;
        }, 2000);
      }
    })
  }

  getAllClient() {
    this._listClient$ = this.http.get<ClientModel[]>(this._PATH);
  }

  deleteClient(id: number) {
    this.http.delete(this._PATH + `/${id}`).subscribe({
      complete: () => {
        this.alertSerivce.message = 'Информация о клиенте удалёна';
        this.alertSerivce.mode = 'successfully';
        this.alertSerivce.isOpen = true;

        this.getAllClient();

        setTimeout(() => {
          this.alertSerivce.isOpen = false;
        }, 3000);}
    })
  }

  updateClient(client: ClientModel, id: number, resetClick: EventEmitter<any>) {
    
    client.id = id;

    this.http.put(this._PATH, client).subscribe({
      complete: () => {
        this.alertSerivce.message = 'Информация о клиенте обновлёна';
        this.alertSerivce.mode = 'successfully';
        this.alertSerivce.isOpen = true;

        this.getAllClient();
        resetClick.emit();

        setTimeout(() => {
          this.alertSerivce.isOpen = false;
        }, 3000);}
    })
  }

  get listClient() {
    return this._listClient$;
  }
}
