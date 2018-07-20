import { Center } from './center';
export interface ILocation {
    lat: number;
    long: number;
    name: string;
    type: Center;
    address: string;
    description: string;
}

// type: 'trashPickup, trashCenter, recyclingCenter'