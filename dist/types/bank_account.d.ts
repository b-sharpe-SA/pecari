import { BankAccount } from './common';
export interface BankAccountListParameters extends Partial<{
    verified: boolean;
    search: string;
    ordering: string;
    offset: number;
    name: string;
    myself: boolean;
    limit: number;
    full_name: string;
    exclude_currency: string;
    enabled: boolean;
    currency: string;
    bank_name: string;
}> {
}
export interface BankAccountRessourceResponse extends Omit<BankAccount, 'owners'> {
    owners: Array<{
        id: number;
        name: string;
    }>;
}