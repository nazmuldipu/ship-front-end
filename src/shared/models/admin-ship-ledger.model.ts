import { Ship } from './ship.model';
import { Sort } from './sort.model';

export interface AdminShipLedger {
  ship: Ship;
  date: Date;
  explanation: string;
  ref: string;
  debit: number;
  credit: number;
  balance: number;
  approved: boolean;
}

export class AdminShipLedgerPage {
  constructor(
    public content?: AdminShipLedger[],
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
