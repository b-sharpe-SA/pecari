"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CactusClient = void 0;
const axios_1 = __importDefault(require("axios"));
const _ressources_1 = require("./ressources");
const constants_1 = require("./constants");
/**
 * Client definition
 * @property {string} baseUrl - base url to fetch cactus api
 * @property {string} token - set default authorization token
 */
class CactusClient {
    constructor(baseUrl, token) {
        this.instance = axios_1.default.create({
            timeout: 10000,
        });
        this.instanceParams = {
            instance: this.instance,
            setToken: this.setToken,
            removeToken: this.removeToken,
        };
        this.login = new _ressources_1.LoginRessource(this.instanceParams);
        this.myself = new _ressources_1.MyselfRessource(this.instanceParams);
        this.customer = new _ressources_1.CustomerRessource(this.instanceParams);
        this.advancedAuth = new _ressources_1.AdvancedAuthRessource(this.instanceParams);
        this.passwordReset = new _ressources_1.PasswordResetRessource(this.instanceParams);
        this.ticket = new _ressources_1.TicketRessource(this.instanceParams);
        this.pspPrice = new _ressources_1.PspPriceRessource(this.instanceParams);
        this.beneficialOwner = new _ressources_1.BeneficialOwnerRessource(this.instanceParams);
        this.beneficiary = new _ressources_1.BeneficiaryRessource(this.instanceParams);
        this.mapbox = new _ressources_1.MapboxRessource(this.instanceParams);
        this.email = new _ressources_1.EmailRessource(this.instanceParams);
        this.onfido = new _ressources_1.OnfidoRessource(this.instanceParams);
        this.message = new _ressources_1.MessageRessource(this.instanceParams);
        this.contract = new _ressources_1.ContractRessource(this.instanceParams);
        this.updatePassword = new _ressources_1.UpdatePasswordRessource(this.instanceParams);
        this.upload = new _ressources_1.UploadRessource(this.instanceParams);
        this.pspBankAccount = new _ressources_1.PspBankAccountRessource(this.instanceParams);
        this.signup = new _ressources_1.SignupRessource(this.instanceParams);
        this.rateAlert = new _ressources_1.RateAlertRessource(this.instanceParams);
        this.sponsorship = new _ressources_1.SponsorshipRessource(this.instanceParams);
        this.baseUrl = baseUrl;
        this.token = token;
        if (baseUrl.length > 0) {
            this.instance.defaults.baseURL = this.baseUrl;
        }
        if (this.token != null && typeof this.token === 'string') {
            this.setToken(this.token);
        }
    }
    /**
     * Add authorization token to global instance
     * @param token
     */
    setToken(token) {
        this.instance.defaults.headers.common[constants_1.AUTH_HEADER_KEY] = `Bearer ${token}`;
    }
    /**
     * Remove authorization token to global instance
     */
    removeToken() {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete this.instance.defaults.headers.common[constants_1.AUTH_HEADER_KEY];
    }
}
exports.CactusClient = CactusClient;
