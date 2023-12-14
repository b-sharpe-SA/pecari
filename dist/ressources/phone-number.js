"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumberRessource = void 0;
const _helpers_1 = require("../helpers");
const BASE_URL = 'users/user/phone_number';
class PhoneNumberRessource extends _helpers_1.InstanceRessource {
    /**
     * Send an OTP code to the connected user's phone number
     * @returns
     */
    async request() {
        try {
            const { data } = await this.instance.post(`${BASE_URL}/request/`);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Verify of an OTP code sent to a user's phone
     * @param code
     * @returns
     */
    async verify(code) {
        try {
            const { data } = await this.instance.post(`${BASE_URL}/verify/`, {
                otp_code: code,
            });
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.PhoneNumberRessource = PhoneNumberRessource;
