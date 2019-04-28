import { Sort } from './sort.model';

export interface AdminCashbook {
  date: Date;
  explanation: string;
  ref: string;
  debit: number;
  credit: number;
  balance: number;
  approved: boolean;
}

export class AdminCashbookPage {
  constructor(
    public content?: AdminCashbook[],
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
