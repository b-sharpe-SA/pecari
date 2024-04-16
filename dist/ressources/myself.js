"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyselfRessource = void 0;
const _constants_1 = require("../constants");
const _helpers_1 = require("../helpers");
const BASE_URL = `${_constants_1.PUBLIC_PATH}/users/user/myself/`;
class MyselfRessource extends _helpers_1.InstanceRessource {
    /**
     * Fetch myself
     * @returns
     */
    async get() {
        try {
            const { data } = await this.instance.get(BASE_URL);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Update myself
     * @param payload
     * @returns
     */
    async update(payload) {
        try {
            const { data } = await this.instance.patch(BASE_URL, payload);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * User wants to delete it's account
     * Can't login after this
     * Send email to customer care notifying user want to delete it's account
     * @param payload
     * @returns
     */
    async delete() {
        try {
            const { data } = await this.instance.delete(BASE_URL);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.MyselfRessource = MyselfRessource;
