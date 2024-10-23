"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YapealEntryRessource = void 0;
const _constants_1 = require("../../constants");
const _helpers_1 = require("../../helpers");
const BASE_URL = `${_constants_1.MANAGEMENT_PATH}/customers/`;
class YapealEntryRessource extends _helpers_1.InstanceRessource {
    getUrl(yapealEntryId) {
        return `${BASE_URL}yapeal-entries/${yapealEntryId != null ? `${yapealEntryId}/` : ''}`;
    }
    /**
     * List yapeal entries
     * @param reference customer reference
     * @returns
     */
    async list(queryParams) {
        try {
            const url = (0, _helpers_1.concatenateQueryParams)(this.getUrl(), queryParams);
            const { data } = await this.instance.get(url);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Get a yapeal entry
     * @param id yapeal entry id
     * @returns
     */
    async get(id) {
        try {
            const url = this.getUrl(id);
            const { data } = await this.instance.get(url);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.YapealEntryRessource = YapealEntryRessource;
