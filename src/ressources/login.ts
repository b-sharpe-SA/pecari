import { handleError, InstanceRessource } from '@helpers';
import { LoginPayload, LoginTokenResponse } from '@types';

export class LoginRessource extends InstanceRessource {
    /**
     * Log user and set token to global instance
     * @param payload - { email, password }
     * @returns access and refresh token
     */
    async token({ email, password }: LoginPayload) {
        try {
            const { data } = await this.instance.post<LoginTokenResponse>(
                '/login/token/',
                { email, password }
            );
            this.setToken(data.access);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
