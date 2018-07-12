import { ILocation } from "./location";

export interface IRecyclingCenter extends ILocation {
    recycleTypes: string;
    price: string;
}