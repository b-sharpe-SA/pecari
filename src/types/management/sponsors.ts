export interface SponsorCode {
    id: number;
    name: string;
    code: string;
    comment: string;
    discount: SponsorDiscount[];
}

export enum DiscountType {
    Amount = 'amount',
    Percentage = 'percentage',
}

export interface SponsorDiscount {
    id: number;
    type: DiscountType;
    value: string;
}

export type ListSponsorsOrderingOptions =
    | 'name'
    | '-name'
    | 'code'
    | '-code'
    | 'creation_date'
    | '-creation_date';

export interface ListSponsorsQueryParams extends Record<string, any> {
    limit?: number;
    offset?: number;
    ordering?: ListSponsorsOrderingOptions;
    search?: string;
}
