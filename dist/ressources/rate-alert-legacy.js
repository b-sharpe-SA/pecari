"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateAlertLegacyRessource = void 0;
const _constants_1 = require("../constants");
const _helpers_1 = require("../helpers");
const BASE_URL = `${_constants_1.PUBLIC_PATH}/ratealert/`;
// This resource is created to maintain a single branch, but it will be removed once the rate alerts for mobile are redesigned.
class RateAlertLegacyRessource extends _helpers_1.InstanceRessource {
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
     * Get specific rate alert by id
     * @param id Id of rate alert
     * @returns
     */
    async get(id) {
        try {
            const { data } = await this.instance.get(`${BASE_URL}${id}/`);
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
     * Update a rate alert based on id
     * @param id Id of the rate alert
     * @param payload Rate alert payload
     */
    async update(id, payload) {
        try {
            const { data } = await this.instance.patch(`${BASE_URL}${id}/`, payload);
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
exports.RateAlertLegacyRessource = RateAlertLegacyRessource;
