export interface PasswordResetValidationPayload {
    email: string;
    code: string;
    new_password?: string;
}
