"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyselfRessource = void 0;
const _helpers_1 = require("../helpers");
class MyselfRessource extends _helpers_1.InstanceRessource {
    /**
     * Fetch myself
     * @returns
     */
    async get() {
        try {
            const { data } = await this.instance.get('users/user/myself');
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
            const { data } = await this.instance.patch('users/user/myself', payload);
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
            const { data } = await this.instance.delete('users/user/myself');
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.MyselfRessource = MyselfRessource;
