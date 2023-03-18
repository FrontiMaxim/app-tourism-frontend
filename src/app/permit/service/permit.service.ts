import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertService } from 'src/app/components/alert/alert.service';
import { ModalWindowService } from 'src/app/components/modal-window/modal-window.service';
import { PermitModel } from '../models/permit.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermitService {

  constructor(
    private http: HttpClient,  
    private alertSerivce: AlertService,
    private modalWindowService: ModalWindowService
  ) { }

  private _PATH = 'api/permit';
  private _listPermit$: Observable<PermitModel[]>;

  save(permit: PermitModel) {
    this.http.post<HttpResponse<any>>(this._PATH, permit).subscribe({
      error: () => {
        this.alertSerivce.message = 'Такая путёвка уже существует';
        this.alertSerivce.mode = 'unsuccessfully';
        this.alertSerivce.isOpen = true;
      },
      complete: () => {
        this.alertSerivce.message = 'Информация о путёвке добавлена';
        this.alertSerivce.mode = 'successfully';
        this.alertSerivce.isOpen = true;
        // this.getAll();

        this.modalWindowService.close();
        
        setTimeout(() => {
          this.alertSerivce.isOpen = false;
        }, 3000);
      }
    })
  }
}
