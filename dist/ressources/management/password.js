"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordRessource = void 0;
const _constants_1 = require("../../constants");
const _helpers_1 = require("../../helpers");
const BASE_URL = `${_constants_1.MANAGEMENT_PATH}/password`;
class PasswordRessource extends _helpers_1.InstanceRessource {
    /**
     * Update customer password with a new password
     * admin restricted
     * @returns
     */
    async update(payload) {
        try {
            const { data } = await this.instance.post(`${BASE_URL}/change/`, payload);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Send a password reset email to the user
     * @param payload
     * @returns
     */
    async reset(payload) {
        try {
            const { data } = await this.instance.post(`${BASE_URL}/reset/`, payload);
            return data;
        }
        catch (err) {
            throw (0, _helpers_1.handleError)(err);
        }
    }
    /**
     * Reset a password with the code previously received by email
     * @param payload
     * @returns
     */
    async resetValidation(payload) {
        try {
            const { data } = await this.instance.post(`${BASE_URL}/reset/validation/`, payload);
            return data;
        }
        catch (err) {
            throw (0, _helpers_1.handleError)(err);
        }
    }
}
exports.PasswordRessource = PasswordRessource;
