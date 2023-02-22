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
exports.LoginRessource = void 0;
const _helpers_1 = require('../helpers');
class LoginRessource extends _helpers_1.InstanceRessource {
    /**
     * Log user and set token to global instance
     * @param payload - { email, password }
     * @returns access and refresh token
     */
    token({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = yield this.instance.post('/login/token/', {
                    email,
                    password,
                });
                this.setToken(data.access);
                return data;
            } catch (error) {
                throw (0, _helpers_1.handleError)(error);
            }
        });
    }
}
exports.LoginRessource = LoginRessource;
