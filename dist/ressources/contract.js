"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractRessource = void 0;
const _helpers_1 = require("../helpers");
class ContractRessource extends _helpers_1.InstanceRessource {
    getUrl(customer) {
        return `users/customer/${customer}/contract/`;
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
     * @param code otp code
     * @returns
     */
    async sign(customer, code) {
        try {
            const url = `${this.getUrl(customer)}sign/`;
            const { data } = await this.instance.post(url, { otp_code: code });
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
