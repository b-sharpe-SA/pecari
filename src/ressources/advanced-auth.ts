import { cactusClient } from '@client';
import { handleError } from '@helpers';
import { LoginTokenResponse } from '@types';

const BASE_URL = 'users/user/advanced_auth';

export class AdvancedAuthRessource {
    async request() {
        try {
            const { data } = await cactusClient.instance.post(
                `${BASE_URL}/request/`
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    async verify(code: string) {
        try {
            const { data } =
                await cactusClient.instance.post<LoginTokenResponse>(
                    `${BASE_URL}/verify/`,
                    {
                        otp_code: code,
                    }
                );
            cactusClient.setToken(data.access);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
