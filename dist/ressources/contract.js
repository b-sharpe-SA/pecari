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
exports.ContractRessource = void 0;
const _helpers_1 = require('../helpers');
class ContractRessource extends _helpers_1.InstanceRessource {
    getUrl(customer) {
        return `users/customer/${customer}/contract/`;
    }
    /**
     * Get contract
     * @param customer Customer reference
     * @returns
     */
    get(customer) {
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
     * Sign contract
     * @param customer Customer reference
     * @param code otp code
     * @returns
     */
    sign(customer, code) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = `${this.getUrl(customer)}sign/`;
                const { data } = yield this.instance.post(url, {
                    otp_code: code,
                });
                return data;
            } catch (error) {
                throw (0, _helpers_1.handleError)(error);
            }
        });
    }
    /**
     * Request code to sign contract
     * @param customer Customer reference
     * @returns
     */
    request(customer) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = `${this.getUrl(customer)}sign/request/`;
                const { data } = yield this.instance.post(url);
                return data;
            } catch (error) {
                throw (0, _helpers_1.handleError)(error);
            }
        });
    }
}
exports.ContractRessource = ContractRessource;
