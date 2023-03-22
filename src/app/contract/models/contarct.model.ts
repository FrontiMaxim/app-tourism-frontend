import { ClientModel } from "src/app/client/models/client.model";

export interface ContractModel {
    id?: number;
    nameHotel: string;
    addressHotel: string;
    pricePermit: number;
    timeStart: Date;
    timeFinish: Date;
    sizeDiscount: number;
    dateConclusion: Date | string;
    client: ClientModel;
}