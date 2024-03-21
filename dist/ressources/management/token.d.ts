import { InstanceRessource } from '../../helpers';
import { type LoginTokenResponse, type ManagementLoginPayload } from '../../types';
export declare class TokenRessource extends InstanceRessource {
    /**
     * Log admin and set token to global instance
     * @param payload - { email, password, otp_code }
     * @returns access and refresh token
     */
    token({ email, password, otp_code }: ManagementLoginPayload): Promise<LoginTokenResponse>;
}
