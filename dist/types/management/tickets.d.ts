import { type Ticket } from "../ticket";
export type AdminListTicketsOrderingOptions = 'creation_datetime' | '-creation_datetime' | 'trade_date' | '-trade_date' | 'value_date' | '-value_date';
export interface AdminListTicketsQueryParams extends Record<string, any> {
    limit?: number;
    offset?: number;
    ordering?: AdminListTicketsOrderingOptions;
    search?: string;
    customer__id?: string;
}
export interface AdminRestrictedTicket extends Ticket {
    payment_confirmation: string | null;
    change_confirmation: string | null;
}
