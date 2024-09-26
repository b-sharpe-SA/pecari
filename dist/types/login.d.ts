export interface LoginTokenResponse {
    access: string;
    refresh: string;
}
export interface LoginPayload {
    email: string;
    password: string;
    cf_turnstile_response?: string;
}
export interface RefreshTokenPayload {
    refresh: string;
}
export interface RefreshTokenResponse {
    access: string;
}
