"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccountRessource = void 0;
const _helpers_1 = require("../helpers");
class BankAccountRessource extends _helpers_1.InstanceRessource {
    getUrl(customer, bankAccount) {
        return `/users/customer/${customer}/bank_account/${bankAccount != null ? `${bankAccount}/` : ''}`;
    }
    /**
     * List bank accounts for specific customer
     * @param customer Customer reference
     * @returns
     */
    async list(customer, parameters) {
        try {
            const url = parameters?.next ??
                (0, _helpers_1.concatenateQueryParams)(this.getUrl(customer), parameters);
            const { data } = await this.instance.get(url);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Get single bank account by id
     * @param customer Customer reference
     * @param bankAccount Bank account id
     * @returns
     */
    async get(customer, bankAccount) {
        try {
            const url = this.getUrl(customer, bankAccount);
            const { data } = await this.instance.get(url);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.BankAccountRessource = BankAccountRessource;
