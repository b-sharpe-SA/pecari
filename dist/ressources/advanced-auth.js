"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvancedAuthRessource = void 0;
const _constants_1 = require("../constants");
const _helpers_1 = require("../helpers");
const BASE_URL = `${_constants_1.PUBLIC_PATH}/users/user/advanced_auth`;
class AdvancedAuthRessource extends _helpers_1.InstanceRessource {
    /**
     * Send otp code to mobile
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
     * Verify otp code is valid & set token to global instance
     * @param code
     * @returns access and refresh token
     */
    async verify(code) {
        try {
            const { data } = await this.instance.post(`${BASE_URL}/verify/`, {
                otp_code: code,
            });
            this.handleTokens(data.access, data.refresh);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.AdvancedAuthRessource = AdvancedAuthRessource;
