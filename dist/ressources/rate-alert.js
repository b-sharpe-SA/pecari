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
exports.RateAlertRessource = void 0;
const _helpers_1 = require('../helpers');
const BASE_URL = 'ratealert/';
class RateAlertRessource extends _helpers_1.InstanceRessource {
    /**
     * List rate alerts
     * @returns
     */
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = yield this.instance.get(BASE_URL);
                return data;
            } catch (error) {
                throw (0, _helpers_1.handleError)(error);
            }
        });
    }
    /**
     * Create a rate alert
     * @param payload Rate alert payload
     */
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = yield this.instance.post(BASE_URL, payload);
                return data;
            } catch (error) {
                throw (0, _helpers_1.handleError)(error);
            }
        });
    }
    /**
     * Delete a rate alert
     * @param id
     * @returns
     */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = yield this.instance.delete(
                    `${BASE_URL}${id}/`
                );
                return data;
            } catch (error) {
                throw (0, _helpers_1.handleError)(error);
            }
        });
    }
}
exports.RateAlertRessource = RateAlertRessource;
