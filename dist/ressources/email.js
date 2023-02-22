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
exports.EmailRessource = void 0;
const _helpers_1 = require('../helpers');
const BASE_URL = 'users/user/email/';
class EmailRessource extends _helpers_1.InstanceRessource {
    /**
     * Request an user email verification code
     * @returns
     */
    request() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = yield this.instance.post(
                    `${BASE_URL}request/`
                );
                return data;
            } catch (error) {
                throw (0, _helpers_1.handleError)(error);
            }
        });
    }
    /**
     * Verify user email code
     * @param code otp code
     * @returns
     */
    verify(code) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = yield this.instance.post(
                    `${BASE_URL}verify/`,
                    {
                        otp_code: code,
                    }
                );
                return data;
            } catch (error) {
                throw (0, _helpers_1.handleError)(error);
            }
        });
    }
}
exports.EmailRessource = EmailRessource;
