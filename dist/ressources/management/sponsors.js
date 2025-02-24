"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsorsRessource = void 0;
const _constants_1 = require("../../constants");
const _helpers_1 = require("../../helpers");
const BASE_URL = `${_constants_1.MANAGEMENT_PATH}/sponsors/`;
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
}
exports.SponsorsRessource = SponsorsRessource;
