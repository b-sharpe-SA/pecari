"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateAlertRessource = void 0;
const _helpers_1 = require("../helpers");
const BASE_URL = 'ratealert/';
class RateAlertRessource extends _helpers_1.InstanceRessource {
    /**
     * List rate alerts
     * @returns
     */
    async list() {
        try {
            const { data } = await this.instance.get(BASE_URL);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Create a rate alert
     * @param payload Rate alert payload
     */
    async create(payload) {
        try {
            const { data } = await this.instance.post(BASE_URL, payload);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Delete a rate alert
     * @param id
     * @returns
     */
    async delete(id) {
        try {
            const { data } = await this.instance.delete(`${BASE_URL}${id}/`);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.RateAlertRessource = RateAlertRessource;