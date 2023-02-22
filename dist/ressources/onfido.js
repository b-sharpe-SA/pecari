"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnfidoRessource = void 0;
const _helpers_1 = require("../helpers");
const BASE_URL = 'users/user/onfido/';
class OnfidoRessource extends _helpers_1.InstanceRessource {
    /**
     * Get the user onfido SDK token and applicant ID.
     * @param isWeb add ?source=web to url if isWeb === true
     * @returns
     */
    async getTokens(isWeb) {
        try {
            const { data } = await this.instance.post(`${BASE_URL}${isWeb ? '?source=web' : ''}`);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.OnfidoRessource = OnfidoRessource;
