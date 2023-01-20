import axios from 'axios';
import { LoginRessource, MyselfRessource } from '@ressources';
import { AUTH_HEADER_KEY, BASE_API_URL } from './constants';

class CactusClient {
    instance = axios.create({
        baseURL: BASE_API_URL,
        timeout: 10000,
    });

    setToken(token: string) {
        this.instance.defaults.headers.common[
            AUTH_HEADER_KEY
        ] = `Bearer ${token}`;
    }

    removeToken() {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete this.instance.defaults.headers.common[AUTH_HEADER_KEY];
    }

    login = new LoginRessource();

    myself = new MyselfRessource();
}

export const cactusClient = new CactusClient();
