"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordResetRessource = void 0;
const _helpers_1 = require("../helpers");
const BASE_URL = '/password/reset/';
class PasswordResetRessource extends _helpers_1.InstanceRessource {
    /**
     * Send email to reset password
     * @param {string} email
     * @returns
     */
    async reset(email) {
        try {
            const { data } = await this.instance.post(BASE_URL, {
                email,
            });
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Update password using verfication code
     * @param payload
     * @param payload.email
     * @param payload.code
     * @param payload.new_password
     * @returns
     */
    async validation(payload) {
        try {
            const { data } = await this.instance.post(`${BASE_URL}validation/`, payload);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.PasswordResetRessource = PasswordResetRessource;
