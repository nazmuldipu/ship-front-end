import { Category } from './category.model';
import { Sort } from './sort.model';
import { Ship } from './ship.model';

export interface Seat {
  id: number;
  seatNumber: string;
  discounted: boolean;
  available: boolean;
  category: Category;
  ship: Ship;
}

export class SeatPage {
  constructor(
    public content?: Seat[],
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
