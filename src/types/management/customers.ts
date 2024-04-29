import { type BeneficialOwner } from '../beneficial_owner';
import { type Beneficiary } from '../beneficiary';
import { type Customer } from '../customer';
import { type Ticket } from '../ticket';

export type ListCustomersOrderingOptions =
    | 'reference'
    | 'type'
    | 'creation_datetime';

export interface ListCustomersQueryParams extends Record<string, any> {
    limit?: number;
    offset?: number;
    ordering?: ListCustomersOrderingOptions;
    search?: string;
    type?: 'n' | 'l';
}

export interface UserCustomer {
    id: number;
    user: number;
    kyc_policy: string;
    kyc_policy_display: string;
    myself: boolean;
}

export interface Document {
    id: number;
    file: string;
    creation_dt: string;
}

export interface TermsOfUse {
    pdf_unsigned: string;
    pdf_signed: string;
    raw_signature: string;
}

export interface AdminRestrictedCustomer extends Customer {
    id: string;
    first_activation_date: string;
    identity_ok: boolean;
    has_uploaded: boolean;
    phone_number_validated: boolean;
    email_validated: boolean;
    language: string;
    creation_datetime: string;
    risk_assessment: string;
    increased_risk: boolean;
    homonym_risk: number;
    enabled: boolean;
    psp_approved: boolean;
    documents: Document[];
    psp_country: string;
    sms_notifications: false;
    // amount_discounts
    // fees_discounts
    // margin_discounts
    beneficiaries: Beneficiary[];
    beneficial_owners: BeneficialOwner[];
    // sponsored_customers
    tickets: Ticket[];
    terms_of_use: TermsOfUse;
    // terms_of_use_procuration
    user_customer: UserCustomer[];
    // emitter_customer
    high_net_worth: boolean;
    pep: boolean;
    applicant_id: string;
    address_validated: boolean;
}
