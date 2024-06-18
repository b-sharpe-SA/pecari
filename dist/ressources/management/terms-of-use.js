"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermsOfUseRessource = void 0;
const _constants_1 = require("../../constants");
const _helpers_1 = require("../../helpers");
class TermsOfUseRessource extends _helpers_1.InstanceRessource {
    getUrl(customerId, termsOfUseId) {
        return `${_constants_1.MANAGEMENT_PATH}/customers/${customerId}/terms_of_use/${termsOfUseId != null ? `${termsOfUseId}/` : ''}`;
    }
    /**
     * List terms of use for a customer
     * @returns
     */
    async list(customerId) {
        try {
            const { data } = await this.instance.get(this.getUrl(customerId));
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Get a single terms of use for a customer
     * @returns
     */
    async get(customerId, termsOfUseId) {
        try {
            const { data } = await this.instance.get(this.getUrl(customerId, termsOfUseId));
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Delete a terms of use for a customer
     * @returns
     */
    async delete(customerId, termsOfUseId) {
        try {
            const { data } = await this.instance.delete(this.getUrl(customerId, termsOfUseId));
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Generate a new unsigned contract for a customer
     * @returns
     */
    async generate(customerId) {
        try {
            const { data } = await this.instance.post(`${this.getUrl(customerId)}generate/`);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Upload a new terms of use for a customer
     * @returns
     */
    async upload(customerId, formData) {
        try {
            const { data } = await this.instance.post(`${this.getUrl(customerId)}upload/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.TermsOfUseRessource = TermsOfUseRessource;
