import { cactusClient } from '@client';
import { handleError } from '@helpers';
import { PasswordResetValidationPayload } from '@types';

const BASE_URL = '/password/reset/';

export class PasswordResetRessource {
    async reset(email: string) {
        try {
            const { data } = await cactusClient.instance.post(BASE_URL, {
                email,
            });
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    async validation(payload: PasswordResetValidationPayload) {
        try {
            const { data } = await cactusClient.instance.post(
                `${BASE_URL}validation/`,
                payload
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
