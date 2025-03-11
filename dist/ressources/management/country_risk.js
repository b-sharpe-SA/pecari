"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryRiskRessource = void 0;
const _constants_1 = require("../../constants");
const _helpers_1 = require("../../helpers");
const BASE_URL = `${_constants_1.MANAGEMENT_PATH}/country-risk/`;
class CountryRiskRessource extends _helpers_1.InstanceRessource {
    /**
     * List country risk with filters
     * @returns
     */
    async list(queryParams) {
        try {
            const url = (0, _helpers_1.concatenateQueryParams)(BASE_URL, queryParams ?? {});
            const { data } = await this.instance.get(url);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Get a country risk by id
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
     * Create a country risk
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
     * Update a country risk by id
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
     * Delete a country risk by id
     * @param id
     * @returns
     */
    async delete(id) {
        try {
            const url = `${BASE_URL}${id}/`;
            const { data } = await this.instance.delete(url);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.CountryRiskRessource = CountryRiskRessource;
