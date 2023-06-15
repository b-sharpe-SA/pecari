import { handleError, InstanceRessource } from '@helpers';
import { type PasswordResetValidationPayload } from '@types';

const BASE_URL = '/password/reset/';

export class PasswordResetRessource extends InstanceRessource {
    /**
     * Send email to reset password
     * @param {string} email
     * @returns
     */
    async reset(email: string) {
        try {
            const { data } = await this.instance.post(BASE_URL, {
                email,
            });
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Update password using verfication code
     * @param payload
     * @param payload.email
     * @param payload.code
     * @param payload.new_password
     * @returns
     */
    async validation(payload: PasswordResetValidationPayload) {
        try {
            const { data } = await this.instance.post(
                `${BASE_URL}validation/`,
                payload
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
