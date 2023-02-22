"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeneficialOwnerRessource = void 0;
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
const _helpers_1 = require("../helpers");
class BeneficialOwnerRessource extends _helpers_1.InstanceRessource {
    getUrl(customer, reference) {
        return `/users/customer/${customer}/beneficial_owner/${reference ? `${reference}/` : ''}`;
    }
    /**
     * List beneficial owners for specific customer
     * @param customer Customer reference
     * @returns
     */
    async list(customer) {
        try {
            const url = this.getUrl(customer);
            const { data } = await this.instance.get(url);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Create beneficial owner for specific customer
     * @param customer Customer reference
     * @param payload Beneficial owner payload
     * @returns
     */
    async create(customer, payload) {
        try {
            const url = this.getUrl(customer);
            const { data } = await this.instance.post(url, payload);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Update beneficial owner for specific customer
     * @param customer Customer reference
     * @param reference Beneficial owner reference
     * @param payload Beneficial owner payload
     * @returns
     */
    async update(customer, reference, payload) {
        try {
            const url = this.getUrl(customer, reference);
            const { data } = await this.instance.patch(url, payload);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Delete beneficial owner
     * @param customer Customer reference
     * @param reference Beneficial owner reference
     * @returns
     */
    async delete(customer, reference) {
        try {
            const url = this.getUrl(customer, reference);
            const { data } = await this.instance.delete(url);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.BeneficialOwnerRessource = BeneficialOwnerRessource;
