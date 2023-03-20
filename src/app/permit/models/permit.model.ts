import { DiscountModel } from "src/app/discount/models/discount.model";
import { HotelModel } from "src/app/hotel/models/hotel.model";

export interface PermitModel {
    id?: number;
    price: number;
    timeStart: Date;
    timeFinish: Date;
    hotel: HotelModel;
    discount: DiscountModel | null;
}

