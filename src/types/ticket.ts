import {
    Address,
    BankAccount,
    ClientType,
    Fees,
    SourceOfFundsType,
    Title,
    TransactionType,
} from '@types';

export interface ListTicketsParams {
    limit?: number;
    canceled?: boolean;
    customer: string;
    next?: string;
}

export interface Owner extends Address {
    id: number;
    type: ClientType;
    title: Title;
    first_name: string;
    last_name: string;
    name: string;
    company_name: string;
    birth_date: string;
    birth_place: string;
    personal_email: string;
    nationality: string;
    enabled: boolean;
    verified: boolean;
    myself: boolean;
    reason: string;
    reason_description: string;
}

export interface PspBankAccountIncoming extends BankAccount {
    iban: string;
}

export interface Creditor {
    id: number;
    bank: {
        name: string;
    };
    beneficiaries: [
        {
            id: number;
            name: string;
        }
    ];
    display_iban: string;
    display_number: string;
}

export interface Ticket {
    reference: string;
    creditors: Creditor[];
    currency_buy: string;
    currency_sell: string;
    amount: string;
    amount_sell: string;
    amount_buy: string;
    type: TransactionType;
    fee_processing: string;
    fee_transfer: string;
    trade_date: string;
    value_date: string;
    creation_datetime: string;
    incoming_transfer_reference_1: string;
    incoming_transfer_reference_2: string;
    incoming_transfer_reference_3: string;
    incoming_transfer_reference_4: string;
    psp_bank_account_incoming: PspBankAccountIncoming;
    psp_price: string;
    next_step: number;
    qr_bill: string;
    employer_name: string;
    employer_references: string;
    source_of_funds_type: SourceOfFundsType;
    source_of_funds_reference: string;
    emitter_country: string;
    canceled: boolean;
    fees: Fees;
    feesdiscount_set: string[];
    margindiscount_set: string[];
    amountdiscount_set: string[];
}

export interface CreateTicketPayload {
    creditors: [
        {
            id: string;
        }
    ];
    currency_buy: string;
    currency_sell: string;
    amount: string;
    type: TransactionType;
    incoming_transfer_reference_3: string;
    incoming_transfer_reference_4: string;
    psp_price_id?: string;
    employer_name?: string;
    employer_references?: string;
    source_of_funds_type?: SourceOfFundsType;
    source_of_funds_reference?: string;
    emitter_country?: string;
    canceled?: boolean;
}
