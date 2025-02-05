import { type Address, type BankAccount, type ClientType } from '@types';

export interface ListBeneficiaryQueryParams extends Record<string, any> {
    limit?: string;
    enabled?: boolean;
    verified?: boolean;
    bankaccounts_currency?: string;
    bankaccounts_bankname?: string;
    myself?: boolean;
    exclude_currency?: string;
    bankname_beneficiary_currency?: string;
    type?: ClientType;
}

export type CreateBeneficiaryPayload = Partial<Omit<Beneficiary, 'id'>>;

export interface Beneficiary extends Address {
    id: number;
    type: ClientType;
    first_name: string;
    last_name: string;
    company_name: string;
    birth_date: string;
    birth_place: string;
    personal_email: string;
    nationality: string;
    customer: string;
    enabled: boolean;
    verified: boolean;
    bank_accounts: BankAccount[];
    myself: boolean;
}

export interface CreateBankAccountPayload {
    bank: {
        bic: string;
    };
    currencies: string[];
    iban?: string;
    number?: string;
}
