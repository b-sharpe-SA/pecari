"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagementRessource = void 0;
const _helpers_1 = require("../../helpers");
const token_1 = require("./token");
const users_1 = require("./users");
const customers_1 = require("./customers");
const beneficiaries_1 = require("./beneficiaries");
const realtime_rules_1 = require("./realtime-rules");
const banks_1 = require("./banks");
const tickets_1 = require("./tickets");
const password_1 = require("./password");
const terms_of_use_1 = require("./terms-of-use");
const vbans_1 = require("./vbans");
const sponsors_1 = require("./sponsors");
const fees_discounts_1 = require("./fees_discounts");
const margin_discounts_1 = require("./margin_discounts");
class ManagementRessource extends _helpers_1.InstanceRessource {
    constructor() {
        super(...arguments);
        this.token = new token_1.TokenRessource(this);
        this.users = new users_1.UsersRessource(this);
        this.customers = new customers_1.CustomersRessource(this);
        this.beneficiaries = new beneficiaries_1.BeneficiariesRessource(this);
        this.realtimeRules = new realtime_rules_1.RealtimeRulesRessource(this);
        this.banks = new banks_1.BanksRessource(this);
        this.tickets = new tickets_1.TicketsRessource(this);
        this.password = new password_1.PasswordRessource(this);
        this.termsOfUse = new terms_of_use_1.TermsOfUseRessource(this);
        this.vbans = new vbans_1.VbanRessource(this);
        this.sponsors = new sponsors_1.SponsorsRessource(this);
        this.feesDiscounts = new fees_discounts_1.FeesDicountsRessource(this);
        this.marginDiscounts = new margin_discounts_1.MarginDicountsRessource(this);
    }
}
exports.ManagementRessource = ManagementRessource;
