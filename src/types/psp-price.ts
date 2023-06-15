import { type TransactionType } from '@types';

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
    additional_data: {
        savings: string;
        margin: string;
        fee_express_no_discount: boolean;
        fee_transfer_no_discount: string;
        fee_processing_no_discount: string;
        fee_currency_no_discount: string;
        psp_price_no_discount: string;
        margin_no_discount: string;
        savings_no_discount: string;
        amount_buy_no_discount: string;
        amount_sell_no_discount: string;
    };
    amount_discounts: [
        {
            id: number;
            name: string;
            value: string;
            perpetual: boolean;
        }
    ];
    fee_discounts: [
        {
            id: number;
            name: string;
            value_processing_fees: string;
            value_currency_fees: boolean;
            perpetual: boolean;
        }
    ];
    margin_discounts: [
        {
            id: number;
            name: string;
            value: number;
            perpetual: boolean;
        }
    ];
}
