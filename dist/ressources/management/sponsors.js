"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsorsRessource = void 0;
const _constants_1 = require("../../constants");
const _helpers_1 = require("../../helpers");
const BASE_URL = `${_constants_1.MANAGEMENT_PATH}/sponsors/`;
const BASE_URL_DISCOUNTS = `${_constants_1.MANAGEMENT_PATH}/sponsors_discount/`;
class SponsorsRessource extends _helpers_1.InstanceRessource {
    /**
     * List sponsor codes with filters
     * @returns
     */
    async list(queryParams = {}) {
        try {
            const url = (0, _helpers_1.concatenateQueryParams)(BASE_URL, queryParams);
            const { data } = await this.instance.get(url);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    async listDiscounts() {
        try {
            const { data } = await this.instance.get(BASE_URL_DISCOUNTS);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Get a sponsor code by id
     * @param id
     * @returns
     */
    async get(id) {
        try {
            const url = `${BASE_URL}${id}/`;
            const { data } = await this.instance.get(url);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Create a sponsor code
     * @param payload
     * @returns
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
     * Update a sponsor code
     * @param id
     * @param payload
     * @returns
     */
    async update(id, payload) {
        try {
            const url = `${BASE_URL}${id}/`;
            const { data } = await this.instance.patch(url, payload);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Delete a sponsor code
     * @param id
     * @returns
     */
    async delete(id) {
        try {
            const url = `${BASE_URL}${id}/`;
            await this.instance.delete(url);
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.SponsorsRessource = SponsorsRessource;
