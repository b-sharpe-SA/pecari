import { handleError, InstanceRessource } from '@helpers';
import { LoginTokenResponse } from '@types';

const BASE_URL = 'users/user/advanced_auth';

export class AdvancedAuthRessource extends InstanceRessource {
    /**
     * Send otp code to mobile
     * @returns
     */
    async request() {
        try {
            const { data } = await this.instance.post(`${BASE_URL}/request/`);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Verify otp code is valid & set token to global instance
     * @param code
     * @returns access and refresh token
     */
    async verify(code: string) {
        try {
            const { data } = await this.instance.post<LoginTokenResponse>(
                `${BASE_URL}/verify/`,
                {
                    otp_code: code,
                }
            );
            this.setToken(data.access);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
