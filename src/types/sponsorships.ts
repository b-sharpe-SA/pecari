import { CustomerNextStep } from './customer';

export interface Sponsorship {
    first_activation_date: string;
    first_transaction_date: string;
    creation_datetime: string;
    name: string;
    next_step: CustomerNextStep;
    pending: true;
    rewards: [
        {
            creation_datetime: string;
            amount: string;
            fees_processing: string;
        }
    ];
}

export interface SponsorshipInfoByCode {
    first_name: string;
    total_amount: string;
    amount_discount: string;
}
