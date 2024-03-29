import { type AxiosInstance } from 'axios';
import { LoginRessource, MyselfRessource, CustomerRessource, AdvancedAuthRessource, PasswordResetRessource, TicketRessource, PspPriceRessource, BeneficialOwnerRessource, BeneficiaryRessource, MapboxRessource, EmailRessource, OnfidoRessource, MessageRessource, ContractRessource, UpdatePasswordRessource, UploadRessource, PspBankAccountRessource, SignupRessource, RateAlertRessource, SponsorshipRessource, BankAccountRessource, AppCompatibilityResource, PhoneNumberRessource } from './ressources';
interface CactusClientParams {
    baseUrl: string;
    token?: string;
    language?: string;
}
/**
 * Client definition
 * @property {string} baseUrl - base url to fetch cactus api
 * @property {string} token - set default authorization token
 */
export declare class CactusClient {
    private readonly baseUrl;
    private readonly token?;
    private readonly language?;
    readonly instance: AxiosInstance;
    constructor(params: CactusClientParams);
    /**
     * Add authorization token to global instance
     * @param token
     */
    setToken: (token: string) => void;
    /**
     * Remove authorization token to global instance
     */
    removeToken: () => void;
    /**
     * Update Accept-Language header for global instance
     * @param language
     */
    setLanguage(language: string): void;
    instanceParams: {
        instance: AxiosInstance;
        setToken: (token: string) => void;
        removeToken: () => void;
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
    sponsorship: SponsorshipRessource;
    bankAccount: BankAccountRessource;
    appCompatibility: AppCompatibilityResource;
    phoneNumber: PhoneNumberRessource;
}
export {};
