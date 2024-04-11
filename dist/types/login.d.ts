export interface LoginTokenResponse {
    access: string;
    refresh: string;
}
export interface LoginPayload {
    email: string;
    password: string;
}
export interface RefreshTokenPayload {
    refresh: string;
}
export interface RefreshTokenResponse {
    access: string;
}
