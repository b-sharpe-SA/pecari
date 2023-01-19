"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRessource = void 0;
const _client_1 = require("../client");
const _helpers_1 = require("../helpers");
class LoginRessource {
    async token({ email, password }) {
        try {
            const { data } = await _client_1.cactusClient.instance.post('login/token/', { email, password });
            _client_1.cactusClient.setToken(data.access);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.LoginRessource = LoginRessource;
