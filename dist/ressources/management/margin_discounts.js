"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarginDicountsRessource = void 0;
const _constants_1 = require("../../constants");
const _helpers_1 = require("../../helpers");
const BASE_URL = `${_constants_1.MANAGEMENT_PATH}/customers_margin_discounts/`;
class MarginDicountsRessource extends _helpers_1.InstanceRessource {
    /**
     * List fees discounts
     * @param payload query params
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
     * Create new fees discount
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
     * Update a fees discount
     * @param id id of the fees discount
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
     * Delete a fees discount
     * @param id id of the fees discount
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
exports.MarginDicountsRessource = MarginDicountsRessource;
