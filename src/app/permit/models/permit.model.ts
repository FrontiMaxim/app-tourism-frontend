import { HotelModel } from "src/app/hotel/models/hotel.model";

export interface PermitModel {
    id?: number;
    price: number;
    timeStart: Date;
    timeFinish: Date;
    hotel: HotelModel;
    discount: null; // временно
}

