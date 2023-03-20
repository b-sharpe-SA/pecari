"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeneficiaryRessource = void 0;
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
const _helpers_1 = require("../helpers");
class BeneficiaryRessource extends _helpers_1.InstanceRessource {
    constructor() {
        super(...arguments);
        this.getUrl = (customer, reference) => {
            return `/users/customer/${customer}/beneficiary/${reference ? `${reference}/` : ''}`;
        };
    }
    /**
     * List beneficiaries for specific customer
     * @param customer Customer reference
     * @param queryParams
     * @returns
     */
    async list(customer, queryParams) {
        try {
            const url = (0, _helpers_1.concatenateQueryParams)(this.getUrl(customer), queryParams ?? {});
            const { data } = await this.instance.get(url);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Create beneficiary for specific customer
     * @param customer Customer reference
     * @param payload Beneficiary payload
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
    async upload(customer, reference, file) {
        try {
            const url = `${this.getUrl(customer, reference)}upload/`;
            const { data } = await this.instance.post(url, file, {
                headers: {
                    'Content-Type': file.type,
                    'Content-Disposition': `attachment; filename=${file.name}`,
                },
            });
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Delete beneficiary
     * @param customer Customer reference
     * @param reference Beneficiary reference
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
    /**
     * Create bank account for customer and beneficiary
     * @param customer Customer reference
     * @param reference Beneficiary reference
     * @param payload Bank account payload
     * @returns
     */
    async createBankAccount(customer, reference, payload) {
        try {
            const url = this.getUrl(customer, reference);
            const { data } = await this.instance.post(`${url}bank_account/`, payload);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Delete bank account
     * @param customer Customer reference
     * @param beneficiaryReference Beneficiary reference
     * @param bankAccountReference Bank account reference
     * @returns
     */
    async deleteBankAccount(customer, beneficiaryReference, bankAccountReference) {
        try {
            const url = this.getUrl(customer, beneficiaryReference);
            const { data } = await this.instance.delete(`${url}bank_account/${bankAccountReference}/`);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.BeneficiaryRessource = BeneficiaryRessource;
