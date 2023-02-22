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
exports.CustomerRessource = void 0;
const _helpers_1 = require('../helpers');
class CustomerRessource extends _helpers_1.InstanceRessource {
    /**
     * List all customers for current user
     * @returns List of customers
     */
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = yield this.instance.get('users/customer');
                return data;
            } catch (error) {
                throw (0, _helpers_1.handleError)(error);
            }
        });
    }
    /**
     * Get single customer based on reference
     * @param reference customer reference
     * @returns Customer
     */
    get(reference) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = yield this.instance.get(
                    `users/customer/${reference}`
                );
                return data;
            } catch (error) {
                throw (0, _helpers_1.handleError)(error);
            }
        });
    }
    /**
     * Update customer based on reference
     * @param reference
     * @param payload
     * @returns Customer
     */
    update(reference, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = yield this.instance.patch(
                    `users/customer/${reference}`,
                    Object.assign({}, payload)
                );
                return data;
            } catch (error) {
                throw (0, _helpers_1.handleError)(error);
            }
        });
    }
}
exports.CustomerRessource = CustomerRessource;
