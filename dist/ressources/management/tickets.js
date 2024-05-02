"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketsRessource = void 0;
const _constants_1 = require("../../constants");
const _helpers_1 = require("../../helpers");
const BASE_URL = `${_constants_1.MANAGEMENT_PATH}/tickets/`;
class TicketsRessource extends _helpers_1.InstanceRessource {
    /**
     * List tickets with filters
     * @param payload - { limit, offset, ordering, search, customer__id }
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
     * Get a ticket by id
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
     * Update a ticket by id
     * @param id
     * @returns
     */
    async update(id, ticket) {
        try {
            const url = `${BASE_URL}${id}/`;
            const { data } = await this.instance.patch(url, ticket);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Delete a ticket by id
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
exports.TicketsRessource = TicketsRessource;
