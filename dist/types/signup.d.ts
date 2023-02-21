import { ClientType, Myself } from '.';
export type SignupPayload = Partial<{
    first_name: string;
    last_name: string;
    company_name: string;
    business: string;
    legal_form: string;
    registration_country: string;
    language: string;
    email: string;
    company_email: string;
    mobile_phone_number: string;
    password: string;
    create_customer: ClientType;
    send_email_confirmation: boolean;
    auth_method: string;
    newsletter_optin: boolean;
    utm_source: string;
    utm_medium: string;
    utm_campaign: string;
    utm_term: string;
    utm_content: string;
    utm_timestamp: string;
    how_did_you_hear_about_us: string;
    sponsoring_key: string;
}>;
export interface SignupResponse extends Myself {
    access: string;
    refresh: string;
}
