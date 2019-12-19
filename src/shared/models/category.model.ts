import { Ship } from './ship.model';
import { Sort } from './sort.model';

export interface Category {
  id: number;
  name: string;
  description: string;
  seatQuality: string;
  floorNumber: number;
  fare: number;
  discount: number;
  agentDiscount: number;
  priority: number;
  categoryFacilities: CategoryFacilities;
  ship: Ship;
}

export class CategoryPage {
  constructor(
    public content?: Category[],
    public first?: boolean,
    public last?: boolean,
    public number?: number,
    public numberOfElements?: number,
    public size?: number,
    public sort?: Sort[],
    public totalElements?: number,
    public totalPages?: number
  ) { }
}

export interface CategoryFacilities {
  topFloor: boolean;
  ac: boolean;
  freeBreakfast: boolean;
}
