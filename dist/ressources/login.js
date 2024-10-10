"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRessource = void 0;
const _constants_1 = require("../constants");
const _helpers_1 = require("../helpers");
class LoginRessource extends _helpers_1.InstanceRessource {
    /**
     * Log user and set token to global instance
     * @param payload - { email, password, cf_turnstile_response }
     * @returns access and refresh token
     */
    async token(payload) {
        try {
            const { data } = await this.instance.post(`${_constants_1.PUBLIC_PATH}/login/token/`, payload);
            this.handleTokens(data.access, data.refresh);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Try to refresh token
     * @param payload - { refresh }
     * @returns access and refresh token
     */
    async refreshToken({ refresh }) {
        const { data } = await this.instance.post(`${_constants_1.PUBLIC_PATH}/login/token/refresh/`, { refresh });
        this.handleTokens(data.access);
        return data;
    }
}
exports.LoginRessource = LoginRessource;
