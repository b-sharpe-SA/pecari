import {
    type Address,
    type ClientType,
    type Reward,
    type Title,
    type Utm,
} from '@types';

export enum CustomerStatus {
    New = 'New',
    Completed = 'Completed',
    Enabled = 'Enabled',
    Disabled = 'Disabled',
}

export enum TradeFrequency {
    Once = 'ONCE',
    Weekly = 'WEEKLY',
    Less = 'LESS',
    Monthly = 'MONTHLY',
}

export enum TradeAmount {
    Low,
    Middle,
    High,
    VeryHigh,
}

export interface Customer extends Address, Utm {
    reference: string;
    title: Title;
    legal_form: string;
    birth_date: string | null;
    first_name: string | null;
    last_name: string | null;
    company_name: string;
    name: string;
    nationality: string;
    business: string;
    business_details: string;
    registration_number: string;
    type: ClientType;
    default_psp_bank: number | null;
    company_email: string;
    personal_email: string;
    personal_phone_number: string;
    mobile_phone_number: string;
    office_phone_number: string;
    employer: string;
    position: string;
    base_info_completed: boolean;
    next_step: CustomerNextStep;
    next_step_mandatory: boolean;
    business_reason: string;
    origin_of_funds: string;
    how_did_you_hear_about_us: string;
    frontend_data: CustomerFrontEndData;
    newsletter_optin: boolean;
    sponsor_code: string;
    sponsor: string | null;
    sponsoring_key: string;
    sponsoring_url: string;
    sponsoring_url_qrcode: string;
    rewards: Reward[];
    status: CustomerStatus;
    trade_currency_from: string | null;
    trade_currency_to: string | null;
    trade_frequency: TradeFrequency | null;
    trade_amount: TradeAmount | null;
}

export enum CustomerNextStep {
    BaseInfo = 'base_info_completed',
    IdentityNotSubmitted = 'identity-not_submitted',
    IdentityPending = 'identity-pending',
    IdentityClear = 'identity-clear',
    IdentityError = 'identity-error',
    IdentityRetry = 'identity-retry',
    IdentityConsider = 'identity-consider',
    ESign = 'esign',
    ProofResidence = 'proof_of_residence',
    AdminWait = 'admin_wait',
}

export interface CustomerFrontEndData extends Record<string, any> {
    accountType: 'own' | 'salary';
    ibanDocumentDownloaded: boolean;
    employerDocumentDownloaded: boolean;
}

export type UpdateCustomerPayload = Partial<Omit<Customer, 'reference'>>;
