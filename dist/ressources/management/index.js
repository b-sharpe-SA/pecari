"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagementRessource = void 0;
const _helpers_1 = require("../../helpers");
const token_1 = require("./token");
class ManagementRessource extends _helpers_1.InstanceRessource {
    constructor() {
        super(...arguments);
        this.token = new token_1.TokenRessource(this);
    }
}
exports.ManagementRessource = ManagementRessource;
