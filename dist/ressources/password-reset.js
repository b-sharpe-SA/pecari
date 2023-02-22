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
exports.PasswordResetRessource = void 0;
const _helpers_1 = require('../helpers');
const BASE_URL = '/password/reset/';
class PasswordResetRessource extends _helpers_1.InstanceRessource {
    /**
     * Send email to reset password
     * @param {string} email
     * @returns
     */
    reset(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = yield this.instance.post(BASE_URL, {
                    email,
                });
                return data;
            } catch (error) {
                throw (0, _helpers_1.handleError)(error);
            }
        });
    }
    /**
     * Update password using verfication code
     * @param payload
     * @param payload.email
     * @param payload.code
     * @param payload.new_password
     * @returns
     */
    validation(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = yield this.instance.post(
                    `${BASE_URL}validation/`,
                    payload
                );
                return data;
            } catch (error) {
                throw (0, _helpers_1.handleError)(error);
            }
        });
    }
}
exports.PasswordResetRessource = PasswordResetRessource;
