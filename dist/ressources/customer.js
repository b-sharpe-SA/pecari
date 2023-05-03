'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.CustomerRessource = void 0;
const _helpers_1 = require('../helpers');
class CustomerRessource extends _helpers_1.InstanceRessource {
    /**
     * List all customers for current user
     * @returns List of customers
     */
    async list() {
        try {
            const { data } = await this.instance.get('users/customer/');
            return data;
        } catch (error) {
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
            const { data } = await this.instance.get(
                `users/customer/${reference}/`
            );
            return data;
        } catch (error) {
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
            const { data } = await this.instance.patch(
                `users/customer/${reference}/`,
                { ...payload }
            );
            return data;
        } catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.CustomerRessource = CustomerRessource;
