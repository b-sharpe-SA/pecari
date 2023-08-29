export interface Myself {
    first_name: string;
    last_name: string;
    language: string;
    email_validated: boolean;
    email: string;
    mobile_phone_number: string;
    external_user_id: string;
    external_user_id_auth_hash: string;
    external_user_email_hash: string;
}
export interface UpdateMyselfPayload {
    email?: string;
    mobile_phone_number?: string;
    send_phone_number_confirmation?: boolean;
    language?: string;
}
