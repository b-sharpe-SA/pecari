import { LoginRessource, MyselfRessource } from './ressources';
declare class CactusClient {
    private token;
    instance: import('axios').AxiosInstance;
    setToken(newToken: string): void;
    removeToken(): void;
    login: LoginRessource;
    myself: MyselfRessource;
}
export declare const cactusClient: CactusClient;
export {};
