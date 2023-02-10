import { InstanceRessource } from '../helpers';
import { LoginPayload, LoginTokenResponse } from '../types';
export declare class LoginRessource extends InstanceRessource {
    /**
     * Log user and set token to global instance
     * @param payload - { email, password }
     * @returns access and refresh token
     */
    token({ email, password }: LoginPayload): Promise<LoginTokenResponse>;
}
