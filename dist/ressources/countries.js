"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesRessource = void 0;
const _constants_1 = require("../constants");
const _helpers_1 = require("../helpers");
class CountriesRessource extends _helpers_1.InstanceRessource {
    getUrl() {
        return `${_constants_1.PUBLIC_PATH}/countries/`;
    }
    /**
     * Get country list
     * @returns
     */
    async get() {
        try {
            const url = this.getUrl();
            const { data } = await this.instance.get(url);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.CountriesRessource = CountriesRessource;
