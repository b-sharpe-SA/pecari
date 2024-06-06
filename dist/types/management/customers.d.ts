import { type BeneficialOwner } from '../beneficial_owner';
import { type Beneficiary } from '../beneficiary';
import { type Customer } from '../customer';
import { type Ticket } from '../ticket';
import { type UploadDocumentType } from '../upload';
export type ListCustomersOrderingOptions = 'reference' | 'type' | 'creation_datetime';
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
    type: UploadDocumentType;
    creation_dt: string;
}
export interface TermsOfUse {
    pdf_unsigned: string;
    pdf_signed: string;
    raw_signature: string;
}
export declare enum ValidationFlags {
    ToBeCompleted = "TO_BE_COMPLETED",
    InReview = "IN_REVIEW",
    Completed = "COMPLETED",
    Retry = "RETRY"
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
    beneficiaries: Beneficiary[];
    beneficial_owners: BeneficialOwner[];
    tickets: Ticket[];
    terms_of_use: TermsOfUse;
    user_customer: UserCustomer[];
    high_net_worth: boolean;
    pep: boolean;
    applicant_id: string;
    realtime_rule: number;
    base_info_validated: ValidationFlags;
    identity_validated: ValidationFlags;
    address_validated: ValidationFlags;
    contract_signature_validated: ValidationFlags;
    risk_assessment_validated: ValidationFlags;
    trading_information_validated: ValidationFlags;
}
