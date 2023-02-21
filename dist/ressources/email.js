"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailRessource = void 0;
const _helpers_1 = require("../helpers");
const BASE_URL = 'users/user/email/';
class EmailRessource extends _helpers_1.InstanceRessource {
    /**
     * Request an user email verification code
     * @returns
     */
    async request() {
        try {
            const { data } = await this.instance.post(`${BASE_URL}request/`);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Verify user email code
     * @param code otp code
     * @returns
     */
    async verify(code) {
        try {
            const { data } = await this.instance.post(`${BASE_URL}verify/`, {
                otp_code: code,
            });
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.EmailRessource = EmailRessource;
