import { Customer } from './customer';
export interface Sponsorship extends Customer {
    first_activation_date: string;
    first_transaction_date: string;
}
