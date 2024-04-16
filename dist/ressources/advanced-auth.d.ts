import { InstanceRessource } from '../helpers';
import { LoginTokenResponse } from '../types';
export declare class AdvancedAuthRessource extends InstanceRessource {
    /**
     * Send otp code to mobile
     * @returns
     */
    request(): Promise<any>;
    /**
     * Verify otp code is valid & set token to global instance
     * @param code
     * @returns access and refresh token
     */
    verify(code: string): Promise<LoginTokenResponse>;
}
