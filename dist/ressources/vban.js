"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerVbanRessouce = void 0;
const _constants_1 = require("../constants");
const _helpers_1 = require("../helpers");
class CustomerVbanRessouce extends _helpers_1.InstanceRessource {
    getUrl(customerRef, vbanId) {
        return `${_constants_1.PUBLIC_PATH}/users/customer/${customerRef}/vban/${vbanId ?? ''}`;
    }
    /**
     * List vbans for customer
     * @param customer Customer reference
     * @param params Query params
     * @returns
     */
    async list(customerRef, params) {
        try {
            const url = (0, _helpers_1.concatenateQueryParams)(this.getUrl(customerRef), params);
            const { data } = await this.instance.get(url);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Get vban by id for customer
     * @param customer_ref Customer reference
     * @param vban_id VBAN id
     * @returns
     */
    async get(customer, vbanId) {
        try {
            const url = this.getUrl(customer, vbanId);
            const { data } = await this.instance.get(url);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Create a vban for customer
     * @param customer Customer reference
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
}
exports.CustomerVbanRessouce = CustomerVbanRessouce;
