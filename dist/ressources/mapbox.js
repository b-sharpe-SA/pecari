"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapboxRessource = void 0;
const _constants_1 = require("../constants");
const _helpers_1 = require("../helpers");
class MapboxRessource extends _helpers_1.InstanceRessource {
    /**
     * Get mapbox token
     * @returns
     */
    async get() {
        try {
            const { data } = await this.instance.get(`${_constants_1.PUBLIC_PATH}/mapbox/`);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.MapboxRessource = MapboxRessource;
