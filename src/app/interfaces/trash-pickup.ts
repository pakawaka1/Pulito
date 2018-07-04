import { ILocation } from "./location";

export interface ITrashPickup extends ILocation {
    ownerId: string;
    ownerContact: string;
    trashType: string;
}