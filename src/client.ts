import axios, { type AxiosInstance } from 'axios';
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
    PhoneNumberRessource,
    ManagementRessource,
} from '@ressources';
import { AUTH_HEADER_KEY, LANGUAGE_HEADER_KEY } from './constants';

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
export class CactusClient {
    private readonly baseUrl: string;
    private readonly token?: string;
    private readonly language?: string;

    readonly instance: AxiosInstance = axios.create({
        timeout: 10000,
    });

    constructor(params: CactusClientParams) {
        this.baseUrl = params.baseUrl;
        this.token = params.token;
        this.language = params.language;

        this.setToken = this.setToken.bind(this);
        this.removeToken = this.removeToken.bind(this);

        if (this.baseUrl.length > 0) {
            this.instance.defaults.baseURL = this.baseUrl;
        }

        if (this.language != null) {
            this.instance.defaults.headers.common[LANGUAGE_HEADER_KEY] =
                this.language;
        }

        if (this.token != null && typeof this.token === 'string') {
            this.setToken(this.token);
        }
    }

    /**
     * Add authorization token to global instance
     * @param token
     */
    setToken = (token: string) => {
        this.instance.defaults.headers.common[AUTH_HEADER_KEY] =
            `Bearer ${token}`;
    };

    /**
     * Remove authorization token to global instance
     */
    removeToken = () => {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete this.instance.defaults.headers.common[AUTH_HEADER_KEY];
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
        setToken: this.setToken,
        removeToken: this.removeToken,
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

    sponsorship = new SponsorshipRessource(this.instanceParams);

    bankAccount = new BankAccountRessource(this.instanceParams);

    appCompatibility = new AppCompatibilityResource(this.instanceParams);

    phoneNumber = new PhoneNumberRessource(this.instanceParams);

    management = new ManagementRessource(this.instanceParams);
}
