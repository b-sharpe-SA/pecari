import { LoginRessource } from "./ressources";
declare class CactusClient {
    private token;
    instance: import("axios").AxiosInstance;
    setToken(newToken: string): void;
    removeToken(): void;
    login: LoginRessource;
}
export declare const cactusClient: CactusClient;
export {};
