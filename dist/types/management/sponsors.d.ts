export interface SponsorCode {
    id: number;
    name: string;
    code: string;
    comment: string;
    discount: SponsorDiscount[];
}
export declare enum DiscountType {
    Amount = "amount",
    Percentage = "percentage"
}
export interface SponsorDiscount {
    id: number;
    type: DiscountType;
    value: string;
}
export type ListSponsorsOrderingOptions = 'name' | '-name' | 'code' | '-code' | 'creation_datetime' | '-creation_datetime';
export interface ListSponsorsQueryParams extends Record<string, any> {
    limit?: number;
    offset?: number;
    ordering?: ListSponsorsOrderingOptions;
    search?: string;
}
export type CreateSponsorCodePayload = Pick<SponsorCode, 'name' | 'code' | 'comment'>;
