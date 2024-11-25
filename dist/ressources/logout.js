"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoutRessource = void 0;
const _constants_1 = require("../constants");
const _helpers_1 = require("../helpers");
class LogoutRessource extends _helpers_1.InstanceRessource {
    /**
     * Invalidate current refresh token
     * @param {string} refreshToken - refresh token to invalidate
     */
    async invalidateToken({ refreshToken }) {
        try {
            const { data } = await this.instance.post(`${_constants_1.PUBLIC_PATH}/logout/token/`, { refresh: refreshToken });
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.LogoutRessource = LogoutRessource;
