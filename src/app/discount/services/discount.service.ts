import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertService } from 'src/app/components/alert/alert.service';
import { ModalWindowService } from 'src/app/components/modal-window/modal-window.service';
import { DiscountModel } from '../models/discount.model';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor(
    private http: HttpClient,  
    private alertSerivce: AlertService,
    private modalWindowService: ModalWindowService
  ) { }

  private _PATH = 'api/discount';
  private _listDiscount: DiscountModel[];
  
  save(discount: DiscountModel) {
    this.http.post<HttpResponse<any>>(this._PATH, discount).subscribe({
      error: () => {
        this.alertSerivce.message = 'Такая скидка уже существует';
        this.alertSerivce.mode = 'unsuccessfully';
        this.alertSerivce.isOpen = true;
      },
      complete: () => {
        this.alertSerivce.message = 'Информация о скидке добавлена';
        this.alertSerivce.mode = 'successfully';
        this.alertSerivce.isOpen = true;
        this.getAll();

        this.modalWindowService.close();
        
        setTimeout(() => {
          this.alertSerivce.isOpen = false;
        }, 3000);
      }
    })
  }

  getAll() {
    this.http.get<DiscountModel[]>(this._PATH).subscribe(list => {
      this._listDiscount = [...list];
    });
  }

  delete(id: number) {
    this.http.delete(this._PATH + `/${id}`).subscribe({
      complete: () => {
        this.alertSerivce.message = 'Информация о скидке удалёна';
        this.alertSerivce.mode = 'successfully';
        this.alertSerivce.isOpen = true;

        this.getAll();

        setTimeout(() => {
          this.alertSerivce.isOpen = false;
        }, 3000);}
    })
  }

  update(discount: DiscountModel, id: number) {
    
    discount.id = id;

    this.http.put(this._PATH, discount).subscribe({
      complete: () => {
        this.alertSerivce.message = 'Информация о скдике обновлёна';
        this.alertSerivce.mode = 'successfully';
        this.alertSerivce.isOpen = true;

        this.getAll();
        this.modalWindowService.close();

        setTimeout(() => {
          this.alertSerivce.isOpen = false;
        }, 3000);}
    })
  }

  get listDiscount() {
    return this._listDiscount;
  }
}