export interface Myself {
    first_name: string;
    last_name: string;
    language: string;
    email_validated: boolean;
    phone_number_validated: boolean;
    email: string;
    mobile_phone_number: string;
    external_user_id: string;
    external_user_id_auth_hash: string;
    external_user_email_hash: string;
    has_uploaded: boolean;
    identity_ok: boolean;
    email_sent: boolean;
}
export interface UpdateMyselfPayload {
    email?: string;
    mobile_phone_number?: string;
    send_phone_number_confirmation?: boolean;
    language?: string;
}
