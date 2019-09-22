import { SeatStatus } from './booking.model';

export interface ReportRange {
    date: Date;
    shipNumber: string;
    shipName: string;
    totalNumberOfSeat: number;
    totalFare: number;
    totalAdvance: number;
    totalDue: number;
    totalCommission: number;
    status: string;
}