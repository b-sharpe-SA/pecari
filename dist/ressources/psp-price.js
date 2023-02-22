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
exports.PspPriceRessource = void 0;
const _helpers_1 = require('../helpers');
class PspPriceRessource extends _helpers_1.InstanceRessource {
    getUrl(customer) {
        return `/users/customer/${customer}/psp_price/`;
    }
    /**
     * Create psp price for current customer
     * @param customer Customer reference
     * @param payload psp price payload
     */
    create(customer, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.getUrl(customer);
            try {
                const { data } = yield this.instance.post(url, payload);
                return data;
            } catch (error) {
                throw (0, _helpers_1.handleError)(error);
            }
        });
    }
    /**
     * Check if price is available or not for current customer
     * @param customer
     * @returns
     */
    isAvailable(customer) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.getUrl(customer)}available/`;
            try {
                const { data } = yield this.instance.get(url);
                return data;
            } catch (error) {
                throw (0, _helpers_1.handleError)(error);
            }
        });
    }
}
exports.PspPriceRessource = PspPriceRessource;
