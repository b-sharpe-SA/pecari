import { type AxiosInstance } from 'axios';
export interface WithPagination<T> {
    count: number;
    next: string;
    previous: string;
    results: T[];
}
export type Title = 'mr' | 'ms';
export declare enum ClientType {
    Private = "n",
    Legal = "l"
}
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
export interface InstanceRessourceParams {
    instance: AxiosInstance;
    handleTokens: (access: string, refresh?: string) => void;
    logout: () => void;
}
export type TransactionType = 'sell' | 'buy';
export declare enum SourceOfFundsType {
    Employer = "employer",
    Lamal = "lamal",
    Taxes = "taxes",
    Allowances = "allowances",
    Pentions = "pensions ahv iv"
}
export interface Bank extends Address {
    name: string;
    country: string;
    bic: string;
}
export interface BankAccount extends Address {
    id: number;
    iban: string;
    display_iban: string;
    name: string;
    bank: Bank;
    currencies: string[];
    owners: number[];
    enabled: boolean;
    number: string;
    verified: boolean;
}
export interface Fees {
    processing: string;
    transfer: string;
    all: string;
}
export interface Reward {
    creation_datetime: string;
    amount: string;
    fees_processing: string;
    consumed: boolean;
}
export type Platform = 'ios' | 'android' | 'windows' | 'macos' | 'web';
