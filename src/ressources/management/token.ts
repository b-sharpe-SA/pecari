import { MANAGEMENT_PATH } from '@constants';
import { InstanceRessource, handleError } from '@helpers';
import { type LoginTokenResponse, type ManagementLoginPayload } from '@types';

export class TokenRessource extends InstanceRessource {
    /**
     * Log admin and set token to global instance
     * @param payload - { email, password, otp_code }
     * @returns access and refresh token
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    async token({ email, password, otp_code }: ManagementLoginPayload) {
        try {
            const { data } = await this.instance.post<LoginTokenResponse>(
                `${MANAGEMENT_PATH}/token/`,
                { email, password, otp_code }
            );
            this.handleTokens(data.access, data.refresh);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
