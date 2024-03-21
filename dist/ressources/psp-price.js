"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PspPriceRessource = void 0;
const _constants_1 = require("../constants");
const _helpers_1 = require("../helpers");
class PspPriceRessource extends _helpers_1.InstanceRessource {
    getUrl(customer) {
        return `${_constants_1.PUBLIC_PATH}/users/customer/${customer}/psp_price/`;
    }
    /**
     * Create psp price for current customer
     * @param customer Customer reference
     * @param payload psp price payload
     */
    async create(customer, payload) {
        const url = this.getUrl(customer);
        try {
            const { data } = await this.instance.post(url, payload);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Check if price is available or not for current customer
     * @param customer
     * @returns
     */
    async isAvailable(customer) {
        const url = `${this.getUrl(customer)}available/`;
        try {
            const { data } = await this.instance.get(url);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.PspPriceRessource = PspPriceRessource;
