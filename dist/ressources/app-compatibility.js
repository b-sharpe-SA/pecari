"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppCompatibilityResource = void 0;
const _constants_1 = require("../constants");
const _helpers_1 = require("../helpers");
const BASE_URL = `${_constants_1.PUBLIC_PATH}/app_check/`;
class AppCompatibilityResource extends _helpers_1.InstanceRessource {
    /**
     * Get informations about latest mobile app version
     * @returns AppCheck
     */
    async get() {
        try {
            const { data } = await this.instance.get(BASE_URL);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.AppCompatibilityResource = AppCompatibilityResource;
