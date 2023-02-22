"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignupRessource = void 0;
const _helpers_1 = require("../helpers");
class SignupRessource extends _helpers_1.InstanceRessource {
    async post(payload) {
        try {
            const { data } = await this.instance.post('users/user/signup/', payload);
            if (payload.auth_method === 'jwt') {
                this.setToken(data.access);
            }
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.SignupRessource = SignupRessource;
