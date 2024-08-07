import { PUBLIC_PATH } from '@constants';
import { handleError, InstanceRessource } from '@helpers';
import {
    type RefreshTokenPayload,
    type LoginPayload,
    type LoginTokenResponse,
    type RefreshTokenResponse,
} from '@types';

export class LoginRessource extends InstanceRessource {
    /**
     * Log user and set token to global instance
     * @param payload - { email, password }
     * @returns access and refresh token
     */
    async token({ email, password }: LoginPayload) {
        try {
            const { data } = await this.instance.post<LoginTokenResponse>(
                `${PUBLIC_PATH}/login/token/`,
                { email, password }
            );
            this.handleTokens(data.access, data.refresh);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Try to refresh token
     * @param payload - { refresh }
     * @returns access and refresh token
     */
    async refreshToken({ refresh }: RefreshTokenPayload) {
        const { data } = await this.instance.post<RefreshTokenResponse>(
            `${PUBLIC_PATH}/login/token/refresh/`,
            { refresh }
        );
        this.handleTokens(data.access);
        return data;
    }
}
