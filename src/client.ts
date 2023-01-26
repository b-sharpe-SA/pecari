import axios, { AxiosInstance } from 'axios';
import {
    LoginRessource,
    MyselfRessource,
    CustomerRessource,
    AdvancedAuthRessource,
    PasswordResetRessource,
} from '@ressources';
import { AUTH_HEADER_KEY } from './constants';

export class CactusClient {
    private readonly baseUrl: string;
    private readonly token?: string;

    readonly instance: AxiosInstance = axios.create({
        timeout: 10000,
    });

    constructor(baseUrl: string, token?: string) {
        this.baseUrl = baseUrl;
        this.token = token;

        if (baseUrl.length > 0) {
            this.instance.defaults.baseURL = this.baseUrl;
        }

        if (this.token != null && typeof this.token === 'string') {
            this.setToken(this.token);
        }
    }

    setToken(token: string) {
        this.instance.defaults.headers.common[
            AUTH_HEADER_KEY
        ] = `Bearer ${token}`;
    }

    removeToken() {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete this.instance.defaults.headers.common[AUTH_HEADER_KEY];
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
}
