export interface WithPagination<T> {
    count: number;
    next: string;
    previous: string;
    results: T[];
}

export type Title = 'mr' | 'ms';

export type ClientType = 'n' | 'l';

export interface Address {
    address_line_1: string;
    address_line_2: string;
    address_line_3: string;
    address_line_4: string;
    address_locality: string;
    address_region: string;
    address_postcode: string;
    address_country: string;
}

export interface Utm {
    utm_source: string;
    utm_medium: string;
    utm_campaign: string;
    utm_term: string;
    utm_content: string;
    utm_timestamp: string;
}
