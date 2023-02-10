"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePasswordRessource = void 0;
const _helpers_1 = require("../helpers");
const BASE_URL = 'users/user/update_password/';
class UpdatePasswordRessource extends _helpers_1.InstanceRessource {
    async update(payload) {
        try {
            const { data } = await this.instance.post(BASE_URL, payload);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.UpdatePasswordRessource = UpdatePasswordRessource;
