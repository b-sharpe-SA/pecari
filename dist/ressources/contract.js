"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractRessource = void 0;
const _constants_1 = require("../constants");
const _helpers_1 = require("../helpers");
class ContractRessource extends _helpers_1.InstanceRessource {
    getUrl(customer) {
        return `${_constants_1.PUBLIC_PATH}/users/customer/${customer}/contract/`;
    }
    /**
     * Get contract
     * @param customer Customer reference
     * @returns
     */
    async get(customer) {
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
     * Sign contract
     * @param customer Customer reference
     * @param payload payload
     * @param payload.otp_code Optional otp code
     * @param payload.skip Sign contract without otp code
     * @returns
     */
    async sign(customer, payload) {
        try {
            const url = `${this.getUrl(customer)}sign/`;
            const { data } = await this.instance.post(url, payload);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Request code to sign contract
     * @param customer Customer reference
     * @returns
     */
    async request(customer) {
        try {
            const url = `${this.getUrl(customer)}sign/request/`;
            const { data } = await this.instance.post(url);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.ContractRessource = ContractRessource;
