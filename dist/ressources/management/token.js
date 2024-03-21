"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenRessource = void 0;
const _constants_1 = require("../../constants");
const _helpers_1 = require("../../helpers");
class TokenRessource extends _helpers_1.InstanceRessource {
    /**
     * Log admin and set token to global instance
     * @param payload - { email, password, otp_code }
     * @returns access and refresh token
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    async token({ email, password, otp_code }) {
        try {
            const { data } = await this.instance.post(`${_constants_1.MANAGEMENT_PATH}/token/`, { email, password, otp_code });
            this.setToken(data.access);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.TokenRessource = TokenRessource;
