import { Sort } from './sort.model';
import { User } from './user.model';

export interface ShipAgentLedger {
  agent: User;
  date: Date;
  explanation: string;
  ref: string;
  debit: number;
  credit: number;
  balance: number;
  approved: boolean;
}

export class ShipAgentLedgerPage {
  constructor(
    public content?: ShipAgentLedger[],
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
