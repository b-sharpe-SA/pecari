import { InstanceRessource } from '../helpers';
import { type RefreshTokenPayload, type LoginPayload, type LoginTokenResponse, type RefreshTokenResponse } from '../types';
export declare class LoginRessource extends InstanceRessource {
    /**
     * Log user and set token to global instance
     * @param payload - { email, password }
     * @returns access and refresh token
     */
    token({ email, password }: LoginPayload): Promise<LoginTokenResponse>;
    /**
     * Try to refresh token
     * @param payload - { refresh }
     * @returns access and refresh token
     */
    refreshToken({ refresh }: RefreshTokenPayload): Promise<RefreshTokenResponse>;
}
