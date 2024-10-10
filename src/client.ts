/* eslint-disable @typescript-eslint/return-await */
import axios, { type AxiosInstance, type AxiosError } from 'axios';
import {
    LoginRessource,
    MyselfRessource,
    CustomerRessource,
    AdvancedAuthRessource,
    PasswordResetRessource,
    TicketRessource,
    PspPriceRessource,
    BeneficialOwnerRessource,
    BeneficiaryRessource,
    MapboxRessource,
    EmailRessource,
    OnfidoRessource,
    MessageRessource,
    ContractRessource,
    UpdatePasswordRessource,
    UploadRessource,
    PspBankAccountRessource,
    SignupRessource,
    RateAlertRessource,
    RateAlertLegacyRessource,
    SponsorshipRessource,
    BankAccountRessource,
    AppCompatibilityResource,
    PhoneNumberRessource,
    ManagementRessource,
    LogoutRessource,
    CountriesRessource,
} from '@ressources';
import { AUTH_HEADER_KEY, LANGUAGE_HEADER_KEY } from './constants';
import { ErrorCodes } from './types/errors';

interface CactusClientParams {
    baseUrl: string;
    token?: string;
    refreshToken?: string;
    language?: string;
    saveTokens?: (access: string, refresh?: string) => void;
    onLogout?: () => void;
}

declare module 'axios' {
    export interface AxiosRequestConfig {
        _retry?: boolean;
    }
}

/**
 * Client definition
 * @property {string} baseUrl - base url to fetch cactus api
 * @property {string} token - set default authorization token
 * @property {string} refreshToken - pass refresh token that will be used in interceptor in case of expired token
 * @property {string} language - set default language for all requests
 * @property {string} saveTokens - function to save tokens in local storage
 * @property {string} onLogout - callback function to call when logout is called (eg. reset tokens from local storage)
 */
export class CactusClient {
    private readonly baseUrl: string;
    private refreshToken?: string;
    private readonly language?: string;
    private readonly saveTokens?: (access: string, refresh?: string) => void;
    private readonly onLogout?: () => void;

    readonly instance: AxiosInstance = axios.create({
        timeout: 10000,
    });

    constructor(params: CactusClientParams) {
        // initialize client with params
        this.baseUrl = params.baseUrl;
        this.refreshToken = params.refreshToken;
        this.language = params.language;
        this.saveTokens = params.saveTokens;
        this.onLogout = params.onLogout;

        // set default base url, language and token to global axios instance
        this.instance.defaults.baseURL = this.baseUrl;
        if (this.language != null) {
            this.instance.defaults.headers.common[LANGUAGE_HEADER_KEY] =
                this.language;
        }
        if (params.token != null) {
            this.setToken(params.token);
        }

        // Intercetor to handle expired token and try to refresh it
        // TODO: Stop incoming requests while refreshing token
        this.instance.interceptors.response.use(
            (response) => {
                return response;
            },
            async (err: AxiosError<any>) => {
                const originalConfig = err.config;
                if (originalConfig == null) {
                    return Promise.reject(err);
                }
                if (
                    err.response?.status === 403 &&
                    err.response?.data.code === ErrorCodes.AUTH_TOKEN_EXPIRED &&
                    this.refreshToken != null &&
                    !(originalConfig._retry ?? false)
                ) {
                    originalConfig._retry = true; // Prevent infinite loop and mark request as already retried
                    try {
                        const { access } = await this.login.refreshToken({
                            refresh: this.refreshToken,
                        });
                        if (originalConfig.headers != null) {
                            originalConfig.headers[AUTH_HEADER_KEY] =
                                `Bearer ${access}`;
                        }
                        // Retry request with new access token
                        const data =
                            await this.instance.request(originalConfig);
                        return Promise.resolve(data);
                    } catch (err) {
                        return Promise.reject(err);
                    }
                } else {
                    return Promise.reject(err);
                }
            }
        );
    }

    /**
     * Add access token to axios global instance headers
     * @param token
     */
    setToken = (token: string) => {
        this.instance.defaults.headers.common[AUTH_HEADER_KEY] =
            `Bearer ${token}`;
    };

    /**
     * Set refresh token, it will be used in interceptor in case of expired token
     * @param refreshToken
     */
    setRefreshToken = (refreshToken: string) => {
        this.refreshToken = refreshToken;
    };

    /**
     * This function is called only from pecari login and refresh token
     * @param access
     * @param refresh
     */
    handleTokens = (access: string, refresh?: string) => {
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
    logout = () => {
        void this.logoutRessource.invalidateToken({
            refreshToken: this.refreshToken ?? '',
        });
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete this.instance.defaults.headers.common[AUTH_HEADER_KEY];
        if (this.onLogout != null) {
            this.onLogout();
        }
    };

    /**
     * Update Accept-Language header for global instance
     * @param language
     */
    setLanguage(language: string) {
        this.instance.defaults.headers.common[LANGUAGE_HEADER_KEY] = language;
    }

    instanceParams = {
        instance: this.instance,
        handleTokens: this.handleTokens,
        logout: this.logout,
    };

    login = new LoginRessource(this.instanceParams);

    myself = new MyselfRessource(this.instanceParams);

    customer = new CustomerRessource(this.instanceParams);

    advancedAuth = new AdvancedAuthRessource(this.instanceParams);

    passwordReset = new PasswordResetRessource(this.instanceParams);

    ticket = new TicketRessource(this.instanceParams);

    pspPrice = new PspPriceRessource(this.instanceParams);

    beneficialOwner = new BeneficialOwnerRessource(this.instanceParams);

    beneficiary = new BeneficiaryRessource(this.instanceParams);

    mapbox = new MapboxRessource(this.instanceParams);

    email = new EmailRessource(this.instanceParams);

    onfido = new OnfidoRessource(this.instanceParams);

    message = new MessageRessource(this.instanceParams);

    contract = new ContractRessource(this.instanceParams);

    updatePassword = new UpdatePasswordRessource(this.instanceParams);

    upload = new UploadRessource(this.instanceParams);

    pspBankAccount = new PspBankAccountRessource(this.instanceParams);

    signup = new SignupRessource(this.instanceParams);

    rateAlert = new RateAlertRessource(this.instanceParams);

    rateAlertLegacy = new RateAlertLegacyRessource(this.instanceParams);

    sponsorship = new SponsorshipRessource(this.instanceParams);

    bankAccount = new BankAccountRessource(this.instanceParams);

    appCompatibility = new AppCompatibilityResource(this.instanceParams);

    phoneNumber = new PhoneNumberRessource(this.instanceParams);

    countries = new CountriesRessource(this.instanceParams);

    management = new ManagementRessource(this.instanceParams);

    logoutRessource = new LogoutRessource(this.instanceParams);
}
