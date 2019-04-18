import { User } from './user.model';
import { ShipFacilities } from './ship-facilities.model';
import { Sort } from './sort.model';

export interface Ship {
  id: number;
  shipNumber: string;
  name: string;
  description: string;
  kidsPolicy: string;
  quality: string;
  phoneNumber: string;
  floor: string;
  size: string;
  startingPoint: string;
  droppingPoint: string;
  route: string;
  ac: boolean;
  containCabin: boolean;
  online: boolean;
  enabled: boolean;
  deleted: boolean;
  discount: number;
  hotelswavePercentage: number;
  startsFrom: number;
  rating: number;
  facilities: ShipFacilities;
  user: User;
}

export class ShipPage {
  constructor(
    public content?: Ship[],
    public first?: boolean,
    public last?: boolean,
    public number?: number,
    public numberOfElements?: number,
    public size?: number,
    public sort?: Sort[],
    public totalElements?: number,
    public totalPages?: number
  ) {}
}

// {

// 	"shipFacilities": {
// 		"casino": true,
// 		"shops": true,
// 		"spa": true,
// 		"fitnessCenter": true,
// 		"library": true,
// 		"theatre": true,
// 		"cinema": true,
// 		"swimmingPool": true,
// 		"hotTub": true,
// 		"restaurant": true,
// 		"lounges": true,

// 		"gym": true,
// 		"bar": true,
// 		"wifi": true,
// 		"kidsPlayRoom": true
// 	}
// }
