import { Customer } from './customer';
export interface Sponsorship extends Customer {
    first_activation_date: string;
    first_transaction_date: string;
    creation_datetime: string;
}
export interface SponsorshipInfoByCode {
    first_name: string;
    total_amount: string;
    amount_discount: string;
}
