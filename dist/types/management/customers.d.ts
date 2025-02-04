import { type BeneficialOwner } from '../beneficial_owner';
import { type Beneficiary } from '../beneficiary';
import { type CustomerStatus, type Customer } from '../customer';
import { type Ticket } from '../ticket';
import { type UploadDocumentType } from '../upload';
import { type TermsOfUse } from './terms-of-use';
export type ListCustomersOrderingOptions = 'reference' | '-reference' | 'type' | '-type' | 'creation_datetime' | '-creation_datetime';
export interface ListCustomersQueryParams extends Record<string, any> {
    limit?: number;
    offset?: number;
    ordering?: ListCustomersOrderingOptions;
    search?: string;
    type?: 'n' | 'l';
    status?: CustomerStatus;
    increased_risk?: boolean;
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
    type: UploadDocumentType;
    creation_dt: string;
}
export declare enum ValidationFlags {
    ToBeCompleted = "TO_BE_COMPLETED",
    InReview = "IN_REVIEW",
    Completed = "COMPLETED",
    Retry = "RETRY"
}
export type FieldsWithValidationFlags = 'base_info_validated' | 'identity_validated' | 'address_validated' | 'contract_signature_validated' | 'risk_assessment_validated' | 'trading_information_validated' | 'usage_information_validated';
export type SponsorCustomerInfo = Pick<AdminRestrictedCustomer, 'id' | 'first_name' | 'last_name'>;
export interface AdminRestrictedCustomer extends Omit<Customer, 'sponsor'> {
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
    beneficiaries: Beneficiary[];
    beneficial_owners: BeneficialOwner[];
    tickets: Ticket[];
    terms_of_use: TermsOfUse;
    user_customer: UserCustomer[];
    high_net_worth: boolean;
    pep: boolean;
    applicant_id: string;
    realtime_rule: number;
    sponsor: SponsorCustomerInfo | null;
    sponsored_customers: SponsorCustomerInfo[];
}
export interface CustomersStatusCountResponse {
    basic: number;
    complete: number;
    enabled: number;
    new: number;
    disabled: number;
    increased_risk: number;
    total: number;
}
export interface UpdateAdminRestrictedCustomerPayload extends Partial<Omit<AdminRestrictedCustomer, 'id' | 'sponsor' | 'sponsored_customers'>> {
    sponsor?: string | null;
}
