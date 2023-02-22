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
exports.BeneficialOwnerRessource = void 0;
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
const _helpers_1 = require('../helpers');
class BeneficialOwnerRessource extends _helpers_1.InstanceRessource {
    getUrl(customer, reference) {
        return `/users/customer/${customer}/beneficial_owner/${
            reference ? `${reference}/` : ''
        }`;
    }
    /**
     * List beneficial owners for specific customer
     * @param customer Customer reference
     * @returns
     */
    list(customer) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = this.getUrl(customer);
                const { data } = yield this.instance.get(url);
                return data;
            } catch (error) {
                throw (0, _helpers_1.handleError)(error);
            }
        });
    }
    /**
     * Create beneficial owner for specific customer
     * @param customer Customer reference
     * @param payload Beneficial owner payload
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
     * Update beneficial owner for specific customer
     * @param customer Customer reference
     * @param reference Beneficial owner reference
     * @param payload Beneficial owner payload
     * @returns
     */
    update(customer, reference, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = this.getUrl(customer, reference);
                const { data } = yield this.instance.patch(url, payload);
                return data;
            } catch (error) {
                throw (0, _helpers_1.handleError)(error);
            }
        });
    }
    /**
     * Delete beneficial owner
     * @param customer Customer reference
     * @param reference Beneficial owner reference
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
}
exports.BeneficialOwnerRessource = BeneficialOwnerRessource;
