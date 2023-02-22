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
exports.OnfidoRessource = void 0;
const _helpers_1 = require('../helpers');
const BASE_URL = 'users/user/onfido/';
class OnfidoRessource extends _helpers_1.InstanceRessource {
    /**
     * Get the user onfido SDK token and applicant ID.
     * @param isWeb add ?source=web to url if isWeb === true
     * @returns
     */
    getTokens(isWeb) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = yield this.instance.post(
                    `${BASE_URL}${isWeb ? '?source=web' : ''}`
                );
                return data;
            } catch (error) {
                throw (0, _helpers_1.handleError)(error);
            }
        });
    }
}
exports.OnfidoRessource = OnfidoRessource;
