import { AxiosInstance } from 'axios';
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
    SponsorshipRessource,
    BankAccountRessource,
    AppCompatibilityResource,
} from './ressources';
/**
 * Client definition
 * @property {string} baseUrl - base url to fetch cactus api
 * @property {string} token - set default authorization token
 */
export declare class CactusClient {
    private readonly baseUrl;
    private readonly token?;
    readonly instance: AxiosInstance;
    constructor(baseUrl: string, token?: string);
    /**
     * Add authorization token to global instance
     * @param token
     */
    setToken(token: string): void;
    /**
     * Remove authorization token to global instance
     */
    removeToken(): void;
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
}
