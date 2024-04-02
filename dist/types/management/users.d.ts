export type ListUsersOrderingOptions = 'email' | 'first_name' | 'last_name' | 'identity_ok' | 'has_uploaded' | 'date_joined' | '-email' | '-first_name' | '-last_name' | '-identity_ok' | '-has_uploaded' | '-date_joined';
export interface ListUsersQueryParams extends Record<string, any> {
    limit?: number;
    offset?: number;
    ordering?: ListUsersOrderingOptions;
    search?: string;
    identity_ok?: boolean;
    has_uploaded?: boolean;
}
export interface AdminRestrictedUser {
    id: number;
    email: string;
    title: string;
    first_name: string;
    last_name: string;
    mobile_phone_number: string;
    remarks: string;
    birth_date: string;
    birth_place: string;
    nationality: string;
    position: string;
    address_line_1: string;
    address_line_2: string;
    address_line_3: string;
    address_line_4: string;
    address_postcode: string;
    address_locality: string;
    address_country: string;
    signup_device: 'ios' | 'android' | 'web';
    email_validated: boolean;
    verified_first_name: string;
    verified_last_name: string;
    identity_ok: boolean;
    has_uploaded: boolean;
    language: string;
    is_active: boolean;
    is_staff: boolean;
    is_superuser: boolean;
    last_login: string;
    date_joined: string;
    groups: Group[];
    permissions: Permission[];
}
export interface Group {
    id: number;
    name: string;
}
export interface Permission {
    id: number;
    name: string;
}
export interface CreateUserAccountPayload {
    email: string;
    password: string;
}
