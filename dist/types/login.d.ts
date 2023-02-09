export interface LoginTokenResponse {
    access: string;
    refresh: string;
}
export interface LoginPayload {
    email: string;
    password: string;
}
