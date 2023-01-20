'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.MyselfRessource = void 0;
const _client_1 = require('../client');
const _helpers_1 = require('../helpers');
class MyselfRessource {
    async get() {
        try {
            const { data } = await _client_1.cactusClient.instance.get(
                'users/user/myself'
            );
            return data;
        } catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.MyselfRessource = MyselfRessource;
