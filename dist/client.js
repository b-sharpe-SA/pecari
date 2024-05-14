"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CactusClient = void 0;
/* eslint-disable @typescript-eslint/return-await */
const axios_1 = __importDefault(require("axios"));
const _ressources_1 = require("./ressources");
const constants_1 = require("./constants");
const errors_1 = require("./types/errors");
/**
 * Client definition
 * @property {string} baseUrl - base url to fetch cactus api
 * @property {string} token - set default authorization token
 * @property {string} refreshToken - pass refresh token that will be used in interceptor in case of expired token
 * @property {string} language - set default language for all requests
 * @property {string} saveTokens - function to save tokens in local storage
 * @property {string} onLogout - callback function to call when logout is called (eg. reset tokens from local storage)
 */
class CactusClient {
    constructor(params) {
        this.instance = axios_1.default.create({
            timeout: 10000,
        });
        /**
         * Add access token to axios global instance headers
         * @param token
         */
        this.setToken = (token) => {
            this.instance.defaults.headers.common[constants_1.AUTH_HEADER_KEY] =
                `Bearer ${token}`;
        };
        /**
         * Set refresh token, it will be used in interceptor in case of expired token
         * @param refreshToken
         */
        this.setRefreshToken = (refreshToken) => {
            this.refreshToken = refreshToken;
        };
        /**
         * This function is called only from pecari login and refresh token
         * @param access
         * @param refresh
         */
        this.handleTokens = (access, refresh) => {
            if (this.saveTokens != null) {
                this.saveTokens(access, refresh);
            }
            this.setToken(access);
            if (refresh != null) {
                this.setRefreshToken(refresh);
            }
        };
        /**
         * You can call this function to remove access token from axios global instance headers
         *
         * It will also call resetTokens function if it is provided in constructor
         */
        this.logout = () => {
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete this.instance.defaults.headers.common[constants_1.AUTH_HEADER_KEY];
            if (this.onLogout != null) {
                this.onLogout();
            }
        };
        this.instanceParams = {
            instance: this.instance,
            handleTokens: this.handleTokens,
            logout: this.logout,
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
        this.rateAlertLegacy = new _ressources_1.RateAlertLegacyRessource(this.instanceParams);
        this.sponsorship = new _ressources_1.SponsorshipRessource(this.instanceParams);
        this.bankAccount = new _ressources_1.BankAccountRessource(this.instanceParams);
        this.appCompatibility = new _ressources_1.AppCompatibilityResource(this.instanceParams);
        this.phoneNumber = new _ressources_1.PhoneNumberRessource(this.instanceParams);
        this.management = new _ressources_1.ManagementRessource(this.instanceParams);
        // initialize client with params
        this.baseUrl = params.baseUrl;
        this.refreshToken = params.refreshToken;
        this.language = params.language;
        this.saveTokens = params.saveTokens;
        this.onLogout = params.onLogout;
        // set default base url, language and token to global axios instance
        this.instance.defaults.baseURL = this.baseUrl;
        if (this.language != null) {
            this.instance.defaults.headers.common[constants_1.LANGUAGE_HEADER_KEY] =
                this.language;
        }
        if (params.token != null) {
            this.setToken(params.token);
        }
        // Intercetor to handle expired token and try to refresh it
        // TODO: Stop incoming requests while refreshing token
        this.instance.interceptors.response.use((response) => {
            return response;
        }, async (err) => {
            const originalConfig = err.config;
            if (originalConfig == null) {
                return Promise.reject(err);
            }
            if (err.response?.status === 403 &&
                err.response?.data.code === errors_1.ErrorCodes.AUTH_TOKEN_EXPIRED &&
                this.refreshToken != null &&
                !(originalConfig._retry ?? false)) {
                originalConfig._retry = true; // Prevent infinite loop and mark request as already retried
                try {
                    const { access } = await this.login.refreshToken({
                        refresh: this.refreshToken,
                    });
                    if (originalConfig.headers != null) {
                        originalConfig.headers[constants_1.AUTH_HEADER_KEY] =
                            `Bearer ${access}`;
                    }
                    // Retry request with new access token
                    const data = await this.instance.request(originalConfig);
                    return Promise.resolve(data);
                }
                catch (err) {
                    return Promise.reject(err);
                }
            }
            else {
                return Promise.reject(err);
            }
        });
    }
    /**
     * Update Accept-Language header for global instance
     * @param language
     */
    setLanguage(language) {
        this.instance.defaults.headers.common[constants_1.LANGUAGE_HEADER_KEY] = language;
    }
}
exports.CactusClient = CactusClient;
