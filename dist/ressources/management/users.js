"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRessource = void 0;
const _constants_1 = require("../../constants");
const _helpers_1 = require("../../helpers");
const BASE_URL = `${_constants_1.MANAGEMENT_PATH}/users/`;
class UsersRessource extends _helpers_1.InstanceRessource {
    /**
     * List users with filters
     * @param payload - { limit, offset, ordering, search }
     * @returns
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
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
     * Create a user in cactus
     * @param payload { email, password }
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
}
exports.UsersRessource = UsersRessource;
