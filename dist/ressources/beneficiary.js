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
exports.BeneficiaryRessource = void 0;
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
const _helpers_1 = require('../helpers');
class BeneficiaryRessource extends _helpers_1.InstanceRessource {
    constructor() {
        super(...arguments);
        this.getUrl = (customer, reference) => {
            return `/users/customer/${customer}/beneficiary/${
                reference ? `${reference}/` : ''
            }`;
        };
    }
    /**
     * List beneficiaries for specific customer
     * @param customer Customer reference
     * @param queryParams
     * @returns
     */
    list(customer, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = (0, _helpers_1.concatenateQueryParams)(
                    this.getUrl(customer),
                    queryParams !== null && queryParams !== void 0
                        ? queryParams
                        : {}
                );
                const { data } = yield this.instance.get(url);
                return data;
            } catch (error) {
                throw (0, _helpers_1.handleError)(error);
            }
        });
    }
    /**
     * Create beneficiary for specific customer
     * @param customer Customer reference
     * @param payload Beneficiary payload
     * @returns
     */
    create(customer, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = this.getUrl(customer);
                const { data } = yield this.instance.post(url, payload);
                return data;
            } catch (error) {
                throw (0, _helpers_1.handleError)(error);
            }
        });
    }
    /**
     * Delete beneficiary
     * @param customer Customer reference
     * @param reference Beneficiary reference
     * @returns
     */
    delete(customer, reference) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = this.getUrl(customer, reference);
                const { data } = yield this.instance.delete(url);
                return data;
            } catch (error) {
                throw (0, _helpers_1.handleError)(error);
            }
        });
    }
    /**
     * Create bank account for customer and beneficiary
     * @param customer Customer reference
     * @param reference Beneficiary reference
     * @param payload Bank account payload
     * @returns
     */
    createBankAccount(customer, reference, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = this.getUrl(customer, reference);
                const { data } = yield this.instance.post(
                    `${url}bank_account/`,
                    payload
                );
                return data;
            } catch (error) {
                throw (0, _helpers_1.handleError)(error);
            }
        });
    }
    /**
     * Delete bank account
     * @param customer Customer reference
     * @param beneficiaryReference Beneficiary reference
     * @param bankAccountReference Bank account reference
     * @returns
     */
    deleteBankAccount(customer, beneficiaryReference, bankAccountReference) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = this.getUrl(customer, beneficiaryReference);
                const { data } = yield this.instance.delete(
                    `${url}bank_account/${bankAccountReference}/`
                );
                return data;
            } catch (error) {
                throw (0, _helpers_1.handleError)(error);
            }
        });
    }
}
exports.BeneficiaryRessource = BeneficiaryRessource;
