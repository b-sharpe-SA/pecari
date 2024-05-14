import { type AxiosInstance } from 'axios';
import { LoginRessource, MyselfRessource, CustomerRessource, AdvancedAuthRessource, PasswordResetRessource, TicketRessource, PspPriceRessource, BeneficialOwnerRessource, BeneficiaryRessource, MapboxRessource, EmailRessource, OnfidoRessource, MessageRessource, ContractRessource, UpdatePasswordRessource, UploadRessource, PspBankAccountRessource, SignupRessource, RateAlertRessource, RateAlertLegacyRessource, SponsorshipRessource, BankAccountRessource, AppCompatibilityResource, PhoneNumberRessource, ManagementRessource } from './ressources';
interface CactusClientParams {
    baseUrl: string;
    token?: string;
    refreshToken?: string;
    language?: string;
    saveTokens?: (access: string, refresh?: string) => void;
    onLogout?: () => void;
}
declare module 'axios' {
    interface AxiosRequestConfig {
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
export declare class CactusClient {
    private readonly baseUrl;
    private refreshToken?;
    private readonly language?;
    private readonly saveTokens?;
    private readonly onLogout?;
    readonly instance: AxiosInstance;
    constructor(params: CactusClientParams);
    /**
     * Add access token to axios global instance headers
     * @param token
     */
    setToken: (token: string) => void;
    /**
     * Set refresh token, it will be used in interceptor in case of expired token
     * @param refreshToken
     */
    setRefreshToken: (refreshToken: string) => void;
    /**
     * This function is called only from pecari login and refresh token
     * @param access
     * @param refresh
     */
    handleTokens: (access: string, refresh?: string) => void;
    /**
     * You can call this function to remove access token from axios global instance headers
     *
     * It will also call resetTokens function if it is provided in constructor
     */
    logout: () => void;
    /**
     * Update Accept-Language header for global instance
     * @param language
     */
    setLanguage(language: string): void;
    instanceParams: {
        instance: AxiosInstance;
        handleTokens: (access: string, refresh?: string) => void;
        logout: () => void;
    };
    login: LoginRessource;
    myself: MyselfRessource;
    customer: CustomerRessource;
    advancedAuth: AdvancedAuthRessource;
    passwordReset: PasswordResetRessource;
    ticket: TicketRessource;
    pspPrice: PspPriceRessource;
    beneficialOwner: BeneficialOwnerRessource;
    beneficiary: BeneficiaryRessource;
    mapbox: MapboxRessource;
    email: EmailRessource;
    onfido: OnfidoRessource;
    message: MessageRessource;
    contract: ContractRessource;
    updatePassword: UpdatePasswordRessource;
    upload: UploadRessource;
    pspBankAccount: PspBankAccountRessource;
    signup: SignupRessource;
    rateAlert: RateAlertRessource;
    rateAlertLegacy: RateAlertLegacyRessource;
    sponsorship: SponsorshipRessource;
    bankAccount: BankAccountRessource;
    appCompatibility: AppCompatibilityResource;
    phoneNumber: PhoneNumberRessource;
    management: ManagementRessource;
}
export {};
