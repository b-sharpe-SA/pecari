export interface FeesDiscounts {
    id: number;
    name: string;
    perpetual: boolean;
    value_processing_fees: string;
    value_currency_fees: boolean;
    expiration_date: string | null;
    consumed: boolean;
    customer: number;
}

export interface CreateFeesDiscountsPayload
    extends Omit<FeesDiscounts, 'id' | 'consumed'> {}

export interface UpdateFeesDiscountsPayload extends Partial<FeesDiscounts> {}

export interface ListFeesDiscountsQueryParams extends Record<string, any> {
    customer__id?: string;
    customer__reference?: string;
}
