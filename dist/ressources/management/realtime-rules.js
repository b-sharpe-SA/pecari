"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealtimeRulesRessource = void 0;
const _constants_1 = require("../../constants");
const _helpers_1 = require("../../helpers");
const BASE_URL = `${_constants_1.MANAGEMENT_PATH}/realtime_rules/`;
class RealtimeRulesRessource extends _helpers_1.InstanceRessource {
    /**
     * List realtime rules with filters
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
}
exports.RealtimeRulesRessource = RealtimeRulesRessource;
