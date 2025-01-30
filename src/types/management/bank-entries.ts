export type BankEntryProvider = 'CAMT' | 'SWISSQUOTE' | 'YAPEAL';

export interface BankEntry {
    id: number;
    amount: string;
    currency: string;
    origin_iban: string;
    destination_iban: string;
    value_date: string;
    booking_date: string;
    provider: BankEntryProvider;
    remittance_info_1: string;
    remittance_info_2: string;
    creation_dt: string;
}

export type ListBankEntriesOrderingOptions =
    | 'amount'
    | '-amount'
    | 'currency'
    | '-currency'
    | 'value_date'
    | '-value_date'
    | 'booking_date'
    | '-booking_date'
    | 'provider'
    | '-provider';

export interface ListBankEntriesQueryParams {
    limit?: number;
    offset?: number;
    ordering?: ListBankEntriesOrderingOptions;

    amount_max?: string;
    amount_min?: string;

    currency?: string[];

    provider?: BankEntryProvider[];

    value_date_after?: string;
    value_date_before?: string;

    booking_date_after?: string;
    booking_date_before?: string;
}
