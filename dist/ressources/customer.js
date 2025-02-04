"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRessource = void 0;
const _constants_1 = require("../constants");
const _helpers_1 = require("../helpers");
const BASE_URL = `${_constants_1.PUBLIC_PATH}/users/customer/`;
class CustomerRessource extends _helpers_1.InstanceRessource {
    /**
     * List all customers for current user
     * @returns List of customers
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
    /**
     * Get single customer based on reference
     * @param reference customer reference
     * @returns Customer
     */
    async get(reference) {
        try {
            const { data } = await this.instance.get(`${BASE_URL}${reference}/`);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Update customer based on reference
     * @param reference
     * @param payload
     * @returns Customer
     */
    async update(reference, payload) {
        try {
            const { data } = await this.instance.patch(`${BASE_URL}${reference}/`, { ...payload });
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Call this endpoint to validate the flags of a customer
     * Mainly used during signup to validate a section
     * @param reference customer reference
     * @param flags array of flags to validate
     */
    async validateFlags(reference, flags) {
        try {
            const { data } = await this.instance.post(`${BASE_URL}${reference}/validate_flags/`, { flags });
            return data;
        }
        catch (err) {
            throw (0, _helpers_1.handleError)(err);
        }
    }
}
exports.CustomerRessource = CustomerRessource;
