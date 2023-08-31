import { handleError, InstanceRessource } from '@helpers';

const BASE_URL = 'users/user/phone_number';

export class PhoneNumberRessource extends InstanceRessource {
    /**
     * Send an OTP code to the connected user's phone number
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
     * Verify of an OTP code sent to a user's phone
     * @param code
     * @returns
     */
    async verify(code: string) {
        try {
            const { data } = await this.instance.post(`${BASE_URL}/verify/`, {
                otp_code: code,
            });
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
