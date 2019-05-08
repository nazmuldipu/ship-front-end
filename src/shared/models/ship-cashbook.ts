import { Sort } from './sort.model';
import { Ship } from './ship.model';

export interface ShipCashbook {
  ship: Ship;
  date: Date;
  explanation: string;
  ref: string;
  debit: number;
  credit: number;
  balance: number;
  approved: boolean;
}

export class ShipCashbookPage {
  constructor(
    public content?: ShipCashbook[],
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
