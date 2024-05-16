export interface PasswordUpdatePayload {
    email: string;
    new_password: string;
}
export interface PasswordResetPayload {
    email: string;
}
