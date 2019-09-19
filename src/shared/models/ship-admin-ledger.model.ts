import { User } from './user.model';
import { Sort } from './sort.model';

export interface ShipAdminLedger {
    user: User;
    date: Date;
    explanation: string;
    ref: string;
    debit: number;
    credit: number;
    balance: number;
    approved: boolean;
}

export class ShipAdminLedgerPage {
    constructor(
        public content?: ShipAdminLedger[],
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
