"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PspBankAccountRessource = void 0;
const _helpers_1 = require("../helpers");
const BASE_URL = 'banking/psp_bank_account/';
class PspBankAccountRessource extends _helpers_1.InstanceRessource {
    /**
     * Get psp bank account by currency
     * @param customer customer reference
     * @param currency currency ISO ex: CHF
     * @returns
     */
    async byCurrency(customer, currency) {
        try {
            const url = `${BASE_URL}${customer}/by_currency/${currency}/`;
            const { data } = await this.instance.get(url);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Get IBAN as PDF
     * @param customer customer reference
     * @param currency currency ISO ex: CHF
     * @param iban iban
     * @returns
     */
    async ibanPdf(customer, currency, iban) {
        try {
            const url = `${BASE_URL}${iban}/iban_pdf/${customer}/${currency}/`;
            const { data } = await this.instance.get(url);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Get employer document as PDF
     * @param customer customer reference
     * @param currency currency ISO ex: CHF
     * @param iban iban
     * @returns
     */
    async employerPdf(customer, currency, iban) {
        try {
            const url = `${BASE_URL}${iban}/employer_pdf/${customer}/${currency}/`;
            const { data } = await this.instance.get(url);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.PspBankAccountRessource = PspBankAccountRessource;
