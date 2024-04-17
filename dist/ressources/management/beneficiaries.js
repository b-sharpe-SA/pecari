"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeneficiariesRessource = void 0;
const _constants_1 = require("../../constants");
const _helpers_1 = require("../../helpers");
const BASE_URL = `${_constants_1.MANAGEMENT_PATH}/beneficiaries/`;
class BeneficiariesRessource extends _helpers_1.InstanceRessource {
    /**
     * List beneficiaries with filters
     * @param payload - { limit, offset, ordering, search }
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
     * Get a beneficiary by id
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
     * Update a beneficiary by id
     * @param id
     * @returns
     */
    async update(id, beneficiary) {
        try {
            const url = `${BASE_URL}${id}/`;
            const { data } = await this.instance.patch(url, beneficiary);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Delete a beneficary by id
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
exports.BeneficiariesRessource = BeneficiariesRessource;
