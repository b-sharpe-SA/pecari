import { PUBLIC_PATH } from '@constants';
import { handleError, InstanceRessource } from '@helpers';

const BASE_URL = `${PUBLIC_PATH}/users/user/email/`;

export class EmailRessource extends InstanceRessource {
    /**
     * Send email to verify user email
     * can be a code or a link
     * @returns
     */
    async request(payload: { link: boolean }) {
        try {
            const { data } = await this.instance.post(
                `${BASE_URL}request/`,
                payload
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Verify user email code
     * @param code otp code
     * @returns
     */
    async verify(code: string) {
        try {
            const { data } = await this.instance.post(`${BASE_URL}verify/`, {
                otp_code: code,
            });
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
