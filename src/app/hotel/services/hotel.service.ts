import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertService } from 'src/app/components/alert/alert.service';
import { HotelModel } from '../models/hotel.model';
import { ModalWindowService } from 'src/app/components/modal-window/modal-window.service';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(
    private http: HttpClient,  
    private alertSerivce: AlertService,
    private modalWindowService: ModalWindowService
  ) { }

  private _PATH = 'api/hotel';
  private _listHotel: HotelModel[];
  
  save(hotel: HotelModel) {
    this.http.post<HttpResponse<any>>(this._PATH, hotel).subscribe({
      error: () => {
        this.alertSerivce.message = 'Такой отель уже существует';
        this.alertSerivce.mode = 'unsuccessfully';
        this.alertSerivce.isOpen = true;
      },
      complete: () => {
        this.alertSerivce.message = 'Информация об отеле добавлена';
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
    this.http.get<HotelModel[]>(this._PATH).subscribe(list => {
      this._listHotel = [...list];
    });
  }

  delete(id: number) {
    this.http.delete(this._PATH + `/${id}`).subscribe({
      complete: () => {
        this.alertSerivce.message = 'Информация об отеле удалёна';
        this.alertSerivce.mode = 'successfully';
        this.alertSerivce.isOpen = true;

        this.getAll();

        setTimeout(() => {
          this.alertSerivce.isOpen = false;
        }, 3000);}
    })
  }

  update(hotel: HotelModel, id: number) {
    
    hotel.id = id;

    this.http.put(this._PATH, hotel).subscribe({
      complete: () => {
        this.alertSerivce.message = 'Информация об отеле обновлёна';
        this.alertSerivce.mode = 'successfully';
        this.alertSerivce.isOpen = true;

        this.getAll();
        this.modalWindowService.close();

        setTimeout(() => {
          this.alertSerivce.isOpen = false;
        }, 3000);}
    })
  }

  get listHotel() {
    return this._listHotel;
  }
}
