'use strict';
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator['throw'](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : adopt(result.value).then(fulfilled, rejected);
            }
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
            );
        });
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.PspBankAccountRessource = void 0;
const _helpers_1 = require('../helpers');
const BASE_URL = 'banking/psp_bank_account/';
class PspBankAccountRessource extends _helpers_1.InstanceRessource {
    /**
     * Get psp bank account by currency
     * @param customer customer reference
     * @param currency currency ISO ex: CHF
     * @returns
     */
    byCurrency(customer, currency) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = `${BASE_URL}${customer}/by_currency/${currency}/`;
                const { data } = yield this.instance.get(url);
                return data;
            } catch (error) {
                throw (0, _helpers_1.handleError)(error);
            }
        });
    }
    /**
     * Get IBAN as PDF
     * @param customer customer reference
     * @param currency currency ISO ex: CHF
     * @param iban iban
     * @returns
     */
    ibanPdf(customer, currency, iban) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = `${BASE_URL}${iban}/iban_pdf/${customer}/${currency}/`;
                const { data } = yield this.instance.get(url);
                return data;
            } catch (error) {
                throw (0, _helpers_1.handleError)(error);
            }
        });
    }
    /**
     * Get employer document as PDF
     * @param customer customer reference
     * @param currency currency ISO ex: CHF
     * @param iban iban
     * @returns
     */
    employerPdf(customer, currency, iban) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = `${BASE_URL}${iban}/employer_pdf/${customer}/${currency}/`;
                const { data } = yield this.instance.get(url);
                return data;
            } catch (error) {
                throw (0, _helpers_1.handleError)(error);
            }
        });
    }
}
exports.PspBankAccountRessource = PspBankAccountRessource;
