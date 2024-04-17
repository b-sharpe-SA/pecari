"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagementRessource = void 0;
const _helpers_1 = require("../../helpers");
const token_1 = require("./token");
const users_1 = require("./users");
const customers_1 = require("./customers");
const beneficiaries_1 = require("./beneficiaries");
class ManagementRessource extends _helpers_1.InstanceRessource {
    constructor() {
        super(...arguments);
        this.token = new token_1.TokenRessource(this);
        this.users = new users_1.UsersRessource(this);
        this.customers = new customers_1.CustomersRessource(this);
        this.beneficiaries = new beneficiaries_1.BeneficiariesRessource(this);
    }
}
exports.ManagementRessource = ManagementRessource;
