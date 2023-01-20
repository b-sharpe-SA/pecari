'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.cactusClient = void 0;
const axios_1 = __importDefault(require('axios'));
const _ressources_1 = require('./ressources');
const constants_1 = require('./constants');
class CactusClient {
    constructor() {
        this.token = undefined;
        this.instance = axios_1.default.create({
            baseURL: constants_1.BASE_API_URL,
            timeout: 10000,
            headers: {
                ...(this.token != null ? { Authorization: this.token } : {}),
            },
        });
        this.login = new _ressources_1.LoginRessource();
        this.myself = new _ressources_1.MyselfRessource();
    }
    setToken(newToken) {
        this.token = newToken;
    }
    removeToken() {
        this.token = undefined;
    }
}
exports.cactusClient = new CactusClient();
