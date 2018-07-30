import { Center } from './center';
export interface ILocation {
    latitude: number;
    longitude: number;
    name: string;
    type: Center;
    address: string;
    description: string;
}

// type: 'trashPickup, trashCenter, recyclingCenter'