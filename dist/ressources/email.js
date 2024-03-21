"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailRessource = void 0;
const _constants_1 = require("../constants");
const _helpers_1 = require("../helpers");
const BASE_URL = `${_constants_1.PUBLIC_PATH}/users/user/email/`;
class EmailRessource extends _helpers_1.InstanceRessource {
    /**
     * Send email to verify user email
     * can be a code or a link
     * @returns
     */
    async request(payload) {
        try {
            const { data } = await this.instance.post(`${BASE_URL}request/`, payload);
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
