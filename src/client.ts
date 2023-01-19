import axios from 'axios';
import { LoginRessource } from '@ressources';
import { BASE_API_URL } from './constants';

class CactusClient {
    private token: string | undefined = undefined;

    instance = axios.create({
        baseURL: BASE_API_URL,
        timeout: 10000,
        headers: {
            ...(this.token != null ? { Authorization: this.token } : {}),
        },
    });

    setToken(newToken: string) {
        this.token = newToken;
    }

    removeToken() {
        this.token = undefined;
    }

    login = new LoginRessource();
}

export const cactusClient = new CactusClient();
