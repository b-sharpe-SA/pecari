export interface MarginDiscounts {
    id: number;
    name: string;
    perpetual: boolean;
    value: string;
    expiration_date: string | null;
    consumed: boolean;
    customer: number;
}

export interface CreateMarginDiscountsPayload
    extends Omit<MarginDiscounts, 'id' | 'consumed'> {}

export interface UpdateMarginDiscountsPayload
    extends Partial<CreateMarginDiscountsPayload> {}

export interface ListMarginDiscountsQueryParams extends Record<string, any> {
    customer__id?: string;
    customer__reference?: string;
}
