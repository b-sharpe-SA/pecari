export interface CustomerVBAN {
    creation_datetime: string;
    iban: string;
    enabled: boolean;
    id: number;
    currency: string;
}

export type ListCustomerVbansOrderingOptions =
    | 'creation_datetime'
    | 'currency'
    | 'enabled'
    | '-creation_datetime'
    | '-currency'
    | '-enabled';

export interface ListCustomerVbanParams
    extends Partial<{
        currency: string;
        enabled: boolean;
        limit: number;
        offset: number;
        ordering: ListCustomerVbansOrderingOptions;
    }> {}

export interface CreateCustomerVbanPayload {
    currency: string;
}
