import { TransactionType } from '.';
export interface CreatePspPricePayload {
    currency_buy: string;
    currency_sell: string;
    type: TransactionType;
    amount_buy?: string;
    amount_sell?: string;
}
export interface PspPrice {
    uuid: string;
    currency_buy: string;
    psp_price: string;
    currency_sell: string;
    expiration_dt: string;
    type: TransactionType;
    amount_buy: string;
    amount_sell: string;
    fee_processing: string;
    fees: {
        processing: string;
        transfer: {
            currency: string;
            express: string;
            sharing_scheme: string;
            all: string;
        };
        all: string;
    };
}
