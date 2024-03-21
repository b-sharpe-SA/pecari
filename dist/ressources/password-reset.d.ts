import { InstanceRessource } from '../helpers';
import { type PasswordResetValidationPayload } from '../types';
export declare class PasswordResetRessource extends InstanceRessource {
    /**
     * Send email to reset password
     * @param {string} email
     * @returns
     */
    reset(email: string): Promise<any>;
    /**
     * Update password using verfication code
     * @param payload
     * @param payload.email
     * @param payload.code
     * @param payload.new_password
     * @returns
     */
    validation(payload: PasswordResetValidationPayload): Promise<any>;
}
