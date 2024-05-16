import { InstanceRessource } from '../../helpers';
import { type PasswordResetPayload, type PasswordResetValidationPayload, type PasswordUpdatePayload } from '../../types';
export declare class PasswordRessource extends InstanceRessource {
    /**
     * Update customer password with a new password
     * admin restricted
     * @returns
     */
    update(payload: PasswordUpdatePayload): Promise<any>;
    /**
     * Send a password reset email to the user
     * @param payload
     * @returns
     */
    reset(payload: PasswordResetPayload): Promise<any>;
    /**
     * Reset a password with the code previously received by email
     * @param payload
     * @returns
     */
    resetValidation(payload: PasswordResetValidationPayload): Promise<any>;
}
