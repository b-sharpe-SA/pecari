export interface Vban {
    creation_datetime: string;
    iban: string;
    enabled: boolean;
    id: number;
    currency: string;
}
export type ListVbansOrderingOptions = 'creation_datetime' | '-creation_datetime' | 'enabled' | '-enabled' | 'currency' | '-currency';
export interface ListVbansQueryParams extends Record<string, any> {
    limit?: number;
    offset?: number;
    ordering?: ListVbansOrderingOptions;
    search?: string;
    currency?: string;
    enabled?: boolean;
}
