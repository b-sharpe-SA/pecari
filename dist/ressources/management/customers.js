"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersRessource = void 0;
const _constants_1 = require("../../constants");
const _helpers_1 = require("../../helpers");
const BASE_URL = `${_constants_1.MANAGEMENT_PATH}/customers/`;
class CustomersRessource extends _helpers_1.InstanceRessource {
    /**
     * List users with filters
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
     * Get a customer by id
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
     * Update a customer by id
     * @param id
     * @returns
     */
    async update(id, customer) {
        try {
            const url = `${BASE_URL}${id}/`;
            const { data } = await this.instance.patch(url, customer);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Delete a customer by id
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
    async uploadDocument(id, formData) {
        try {
            const url = `${BASE_URL}${id}/upload/`;
            const { data } = await this.instance.post(url, formData, {
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
    async updateDocumentType(customerId, documentId, type) {
        try {
            const url = `${BASE_URL}${customerId}/documents/${documentId}/`;
            const { data } = await this.instance.put(url, { type });
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    async deleteDocument(customerId, documentId) {
        try {
            const url = `${BASE_URL}${customerId}/documents/${documentId}/`;
            const { data } = await this.instance.delete(url);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    async getStatusCount() {
        try {
            const url = `${BASE_URL}status/`;
            const { data } = await this.instance.get(url);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.CustomersRessource = CustomersRessource;
