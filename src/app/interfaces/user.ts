import { ITrashPickup } from "./trash-pickup";

export interface IUser {
    googleId: string;
    displayName: string;
    email: string;
    score: number;
    trashPickups: ITrashPickup[];
    
}