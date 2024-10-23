import type { BankAccount, Customer } from '..';
export declare enum EntrySense {
    INCOMING = 1,
    OUTGOING = 2
}
export declare enum YapealEntryStatus {
    ACCEPTED_INCOMING = "accp",
    ACCEPTED_OUTGOING = "actc",
    PENDING = "pdng",
    REJECTED = "rjct",
    BOOKED = "book",
    CANCELLED = "canc"
}
export interface YapealEntry {
    id: 0;
    push_timestamp: string;
    event_date: string;
    status: YapealEntryStatus;
    status_reason: string;
    status_reason_additional_infos: Record<string, unknown>;
    sender_account: string;
    sender_name: string;
    remittance_info_1: string;
    remittance_info_2: string;
    remittance_info_3: string;
    vban: {
        creation_datetime: string;
        iban: string;
        enabled: true;
        id: 0;
        currency: string;
        customer: Customer;
    };
    amount: string;
    currency: 0;
    origin: BankAccount;
    destination: BankAccount;
    sense: EntrySense;
    value_date: string;
    booking_date: string;
}
export type ListYapealEntriesOrderingOptions = 'status' | '-status' | 'push_timestamp' | '-push_timestamp' | 'amount' | '-amount';
export interface ListYapealEntriesQueryParams {
    limit?: number;
    offset?: number;
    ordering?: ListYapealEntriesOrderingOptions;
    amount_max?: string;
    amount_min?: string;
    currency?: string;
    push_timestamp_after?: string;
    push_timestamp_before?: string;
    sense?: EntrySense;
    status?: YapealEntryStatus;
}
