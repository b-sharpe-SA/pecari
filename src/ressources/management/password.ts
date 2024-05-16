import { MANAGEMENT_PATH } from '@constants';
import { InstanceRessource, handleError } from '@helpers';
import {
    type PasswordResetPayload,
    type PasswordResetValidationPayload,
    type PasswordUpdatePayload,
} from '@types';

const BASE_URL = `${MANAGEMENT_PATH}/password`;

export class PasswordRessource extends InstanceRessource {
    /**
     * Update customer password with a new password
     * admin restricted
     * @returns
     */
    async update(payload: PasswordUpdatePayload) {
        try {
            const { data } = await this.instance.post(
                `${BASE_URL}/change/`,
                payload
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Send a password reset email to the user
     * @param payload
     * @returns
     */
    async reset(payload: PasswordResetPayload) {
        try {
            const { data } = await this.instance.post(
                `${BASE_URL}/reset/`,
                payload
            );
            return data;
        } catch (err) {
            throw handleError(err);
        }
    }

    /**
     * Reset a password with the code previously received by email
     * @param payload
     * @returns
     */
    async resetValidation(payload: PasswordResetValidationPayload) {
        try {
            const { data } = await this.instance.post(
                `${BASE_URL}/reset/validation/`,
                payload
            );
            return data;
        } catch (err) {
            throw handleError(err);
        }
    }
}
